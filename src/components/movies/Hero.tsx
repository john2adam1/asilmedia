import Link from 'next/link'
import Image from 'next/image'
import { Play, Info } from 'lucide-react'
import { Movie } from './MovieCard'

interface HeroProps {
    movie: Movie
}

export function Hero({ movie }: HeroProps) {
    return (
        <div className="relative w-full h-[85vh] overflow-hidden">
            <Image
                src={movie.thumbnail_url}
                alt={movie.title}
                fill
                className="object-cover brightness-[0.4]"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col justify-end max-w-3xl">
                <span className="text-primary font-bold text-sm tracking-[0.2em] mb-4 uppercase">Featured Release</span>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                    {movie.title}
                </h1>
                <p className="text-lg text-white/80 mb-8 line-clamp-3 leading-relaxed max-w-xl">
                    {movie.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={`/movie/${movie.id}`}
                        className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-white/90 transition-colors"
                    >
                        <Play className="w-5 h-5 fill-black" />
                        Watch Now
                    </Link>
                    <Link
                        href={`/movie/${movie.id}`}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded font-bold hover:bg-white/30 transition-colors"
                    >
                        <Info className="w-5 h-5" />
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    )
}
