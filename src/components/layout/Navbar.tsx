import Link from 'next/link'
import { Search, Play } from 'lucide-react'

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-1 rounded">
                                <Play className="w-6 h-6 fill-white text-white" />
                            </div>
                            <span className="text-primary font-black text-2xl tracking-tighter">FILM.NET</span>
                        </Link>

                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-6 text-sm font-medium">
                                <Link href="/" className="text-white hover:text-muted transition-colors">Home</Link>
                                <Link href="/category/movies" className="text-white hover:text-muted transition-colors">Movies</Link>
                                <Link href="/category/series" className="text-white hover:text-muted transition-colors">TV Shows</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="bg-card/50 border border-border rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-48 lg:w-64 transition-all"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}
