import { supabase } from '@/lib/supabase'
import { MovieCard, Movie } from '@/components/movies/MovieCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const title = slug.charAt(0).toUpperCase() + slug.slice(1)
    return {
        title: `${title} Movies - FILM.NET`,
        description: `Browse and watch the best ${title} movies and series on FILM.NET. High quality streaming for free.`,
    }
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params

    // Map slugs to display names or categories
    const categoryMap: { [key: string]: string } = {
        'movies': 'Action', // For now let's just filter by some logic or show all
        'series': 'Sci-Fi'
    }

    // If the user clicks "Movies", maybe we want to show all movies? 
    // Let's filter by category if it matches, otherwise just show by popular
    const { data: movies } = await supabase
        .from('movies')
        .select('*')
        .ilike('category', `%${slug.replace('s', '')}%`)
        .order('created_at', { ascending: false })

    const typedMovies = (movies as Movie[]) || []

    if (typedMovies.length === 0 && slug !== 'movies' && slug !== 'series') {
        // If it's a specific category and not found
    }

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center gap-4 mb-8">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                            {slug === 'movies' ? 'Barkacha Kinolar' : slug === 'series' ? 'Seriallar' : slug}
                        </h1>
                        <div className="h-0.5 w-12 bg-primary" />
                    </div>
                </div>

                {typedMovies.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-6">
                        {typedMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card/30 rounded-lg border border-border border-dashed">
                        <p className="text-muted text-sm italic">Hozircha malumotlar yo'q...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
