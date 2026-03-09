import { supabase } from '@/lib/supabase'
import { MovieCard, Movie } from '@/components/movies/MovieCard'
import { PremiereSection } from '@/components/movies/PremiereSection'

// Force dynamic as we want fresh content from Supabase
export const dynamic = 'force-dynamic'

export default async function Home() {
  const { data: movies } = await supabase
    .from('movies')
    .select('*')
    .order('created_at', { ascending: false })

  const typedMovies = (movies as Movie[]) || []
  const premiereMovies = typedMovies.slice(0, 10)
  const regularMovies = typedMovies.slice(0)

  return (
    <div className="flex flex-col gap-0 pb-12 pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">

        <PremiereSection movies={premiereMovies} />

        <section>
          <div className="flex items-center justify-between mb-8 group cursor-pointer">
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                TARJIMA KINOLAR <span className="text-white/40 text-lg">2026</span>
              </h2>
              <p className="text-muted text-sm font-medium">O'zbek tilidagi kinolar</p>
            </div>
            <button className="bg-card hover:bg-card-hover text-muted hover:text-white px-4 py-2 rounded text-xs font-bold transition-colors border border-white/5 uppercase tracking-widest mt-auto">
              Barchasi
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
            {regularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {regularMovies.length === 0 && (
            <div className="text-center py-20 bg-card/30 rounded-lg border border-border border-dashed">
              <p className="text-muted text-sm italic">Hozircha malumotlar yo'q...</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
