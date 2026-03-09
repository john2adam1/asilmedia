import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'

export interface Movie {
    id: string
    title: string
    description: string
    thumbnail_url: string
    video_url: string
    category: string
    created_at: string
}

interface MovieCardProps {
    movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
    return (
        <Link href={`/movie/${movie.id}`} className="group block transition-all duration-300">
            <div className="aspect-[2/3] relative overflow-hidden rounded-md bg-card">
                <Image
                    src={movie.thumbnail_url}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />

                {/* Status Badges - Stacked style */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-black/60 text-[9px] font-bold text-white px-1.5 py-0.5 rounded backdrop-blur-sm">480p</span>
                    <span className="bg-black/60 text-[9px] font-bold text-white px-1.5 py-0.5 rounded backdrop-blur-sm">720p</span>
                    <span className="bg-black/60 text-[9px] font-bold text-white px-1.5 py-0.5 rounded backdrop-blur-sm">1080p</span>
                </div>

                {/* Rating Overlay - Yellow style */}
                <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-yellow-500 px-1.5 py-0.5 rounded text-[9px] font-black text-black">
                    ★ +{Math.floor(Math.random() * 100)}
                </div>

                {/* Play Hover State */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary animate-pulse">
                        <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                    </div>
                </div>
            </div>
            <div className="mt-3 space-y-1">
                <h3 className="text-sm font-bold leading-[1.3] line-clamp-2 text-white group-hover:text-primary transition-colors">
                    {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-muted font-medium">
                    <span>{new Date(movie.created_at).getFullYear()}</span>
                    <span className="w-1 h-1 bg-muted/40 rounded-full" />
                    <span className="truncate">{movie.category}</span>
                </div>
            </div>
        </Link>
    )
}
