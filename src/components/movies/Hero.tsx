import Link from 'next/link'
import Image from 'next/image'
import { Play, Info } from 'lucide-react'
import { Movie } from './MovieCard'

interface HeroProps {
    movie: Movie
}

export function Hero({ movie }: HeroProps) {
    return (
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            <Image
                src={movie.thumbnail_url}
                alt={movie.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20" />

            <div className="absolute bottom-12 left-0 w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">Premium</span>
                            <span className="text-white/60 text-xs font-semibold uppercase">{movie.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                            {movie.title}
                        </h1>
                        <p className="text-base text-white/70 line-clamp-2 leading-relaxed max-w-xl">
                            {movie.description}
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href={`/movie/${movie.id}`}
                                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
                            >
                                <Play className="w-4 h-4 fill-white" />
                                KO'RISH
                            </Link>
                            <Link
                                href={`/movie/${movie.id}`}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <Info className="w-4 h-4" />
                                MA'LUMOT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
