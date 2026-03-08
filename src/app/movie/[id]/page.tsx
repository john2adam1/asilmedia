import { supabase } from '@/lib/supabase'
import { Movie } from '@/components/movies/MovieCard'
import { MovieCard } from '@/components/movies/MovieCard'
import { MidAd, SidebarAd } from '@/components/layout/AdPlaceholder'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
    params: Promise<{ id: string }>
}

function getEmbedUrl(url: string) {
    if (!url) return ''
    if (url.includes('iframe')) return url

    // YouTube conversion
    if (url.includes('youtube.com/watch?v=')) {
        const id = url.split('v=')[1]?.split('&')[0]
        return `https://www.youtube.com/embed/${id}`
    }
    if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0]
        return `https://www.youtube.com/embed/${id}`
    }

    return url
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const { data: movie } = await supabase
        .from('movies')
        .select('title, description')
        .eq('id', id)
        .single()

    if (!movie) return { title: 'Movie Not Found' }

    return {
        title: `${movie.title} - FILM.NET`,
        description: movie.description,
        openGraph: {
            title: movie.title,
            description: movie.description,
        }
    }
}

export default async function MoviePage({ params }: Props) {
    const { id } = await params
    const { data: movie } = await supabase
        .from('movies')
        .select('*')
        .eq('id', id)
        .single()

    if (!movie) notFound()

    const typedMovie = movie as Movie

    // Fetch similar movies
    const { data: similar } = await supabase
        .from('movies')
        .select('*')
        .eq('category', typedMovie.category)
        .neq('id', typedMovie.id)
        .limit(6)

    const similarMovies = (similar as Movie[]) || []

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-border">
                        {typedMovie.video_url.includes('iframe') ? (
                            <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{ __html: typedMovie.video_url }}
                            />
                        ) : (
                            <iframe
                                src={getEmbedUrl(typedMovie.video_url)}
                                className="w-full h-full"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{typedMovie.category}</span>
                            <span className="text-muted text-sm">{new Date(typedMovie.created_at).getFullYear()}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">{typedMovie.title}</h1>
                        <p className="text-lg text-white/70 leading-relaxed max-w-3xl">{typedMovie.description}</p>
                    </div>

                    <MidAd />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <SidebarAd />

                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            Similar Movies
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {similarMovies.map((similarMovie) => (
                                <MovieCard key={similarMovie.id} movie={similarMovie} />
                            ))}
                        </div>
                        {similarMovies.length === 0 && (
                            <p className="text-muted text-sm italic">Looking for more movies in {typedMovie.category}...</p>
                        )}
                    </section>
                </aside>
            </div>
        </div>
    )
}
