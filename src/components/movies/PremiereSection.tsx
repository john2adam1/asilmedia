import Link from 'next/link'
import { MovieCard, Movie } from './MovieCard'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface PremiereSectionProps {
    movies: Movie[]
}

export function PremiereSection({ movies }: PremiereSectionProps) {
    if (movies.length === 0) return null

    return (
        <section className="mb-12">
            <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">PREMIERALAR</h2>
                <p className="text-primary text-sm font-medium">Issig'ida tomosha qilib oling! <span className="text-white/60 font-normal">Hammasi bizda!</span></p>
            </div>

            <div className="relative">
                <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x">
                    {movies.slice(0, 8).map((movie) => (
                        <div key={movie.id} className="min-w-[280px] md:min-w-[320px] snap-start">
                            <Link href={`/movie/${movie.id}`} className="group block relative aspect-[16/9] overflow-hidden rounded-md bg-card">
                                <Image
                                    src={movie.thumbnail_url}
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute top-3 left-3 flex flex-col gap-1">
                                    <span className="bg-black/60 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-md">480p</span>
                                    <span className="bg-black/60 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-md">720p</span>
                                    <span className="bg-black/60 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-md">1080p</span>
                                </div>

                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded">
                                    ★ +{Math.floor(Math.random() * 200)}
                                </div>
                            </Link>
                            <h3 className="mt-3 text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                {movie.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-muted font-medium">
                                <span>{new Date(movie.created_at).getFullYear()}</span>
                                <span className="w-1 h-1 bg-muted/40 rounded-full" />
                                <span>{movie.category}</span>
                            </div>
                        </div>
                    ))}

                    <button className="min-w-[50px] flex items-center justify-center bg-card hover:bg-card-hover rounded-md transition-colors border border-white/5">
                        <ChevronRight className="w-8 h-8 text-primary" />
                    </button>
                </div>
            </div>
        </section>
    )
}
