import { supabase } from '@/lib/supabase'
import { Hero } from '@/components/movies/Hero'
import { MovieCard, Movie } from '@/components/movies/MovieCard'
import { TopAd } from '@/components/layout/AdPlaceholder'

// Force dynamic as we want fresh content from Supabase
export const dynamic = 'force-dynamic'

export default async function Home() {
  const { data: movies } = await supabase
    .from('movies')
    .select('*')
    .order('created_at', { ascending: false })

  const typedMovies = (movies as Movie[]) || []
  const heroMovie = typedMovies.find(m => (m as any).is_hero) || typedMovies[0]
  const listMovies = typedMovies.filter(m => m.id !== heroMovie?.id)

  return (
    <div className="flex flex-col gap-8 pb-12">
      {heroMovie && <Hero movie={heroMovie} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 relative z-10">
        <TopAd />

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Recent Releases</h2>
            <div className="h-px flex-1 bg-border ml-6 hidden md:block opacity-20" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
            {listMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {listMovies.length === 0 && (
            <div className="text-center py-20 bg-card rounded-xl border border-border dashed">
              <p className="text-muted italic">No movies found in the database. Add some via the Admin panel.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
