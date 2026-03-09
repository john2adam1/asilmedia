import { supabase } from '@/lib/supabase'
import { MovieCard, Movie } from '@/components/movies/MovieCard'
import { Metadata } from 'next'

interface Props {
    searchParams: Promise<{ q: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { q } = await searchParams
    return {
        title: `"${q}" uchun qidiruv natijalari - FILM.NET`,
        description: `"${q}" bo'yicha qidiruv natijalari. FILM.NET saytida barcha filmlarni bepul tomosha qiling.`,
    }
}

export default async function SearchPage({ searchParams }: Props) {
    const { q } = await searchParams
    const query = q || ''

    // Fetch movies matching the query
    const { data: movies } = await supabase
        .from('movies')
        .select('*')
        .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
        .order('created_at', { ascending: false })

    const typedMovies = (movies as Movie[]) || []

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col mb-8">
                    <h1 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                        Qidiruv natijalari: <span className="text-primary">"{query}"</span>
                    </h1>
                    <div className="h-0.5 w-12 bg-primary" />
                    <p className="text-muted text-xs mt-3">Jami {typedMovies.length} ta natija topildi</p>
                </div>

                {typedMovies.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-6">
                        {typedMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card/30 rounded-lg border border-border border-dashed">
                        <p className="text-muted text-sm italic">Siz qidirgan malumot topilmadi. Boshqa so'z bilan qidirib ko'ring.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
