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
        <Link href={`/movie/${movie.id}`} className="group relative block overflow-hidden rounded-md transition-all duration-300 hover:scale-105 hover:z-10 bg-card">
            <div className="aspect-[2/3] relative">
                <Image
                    src={movie.thumbnail_url}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:brightness-50"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                    </div>
                </div>
            </div>
            <div className="p-3 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-sm font-bold truncate text-white">{movie.title}</h3>
                <p className="text-xs text-muted mt-1">{movie.category}</p>
            </div>
        </Link>
    )
}
