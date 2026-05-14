'use client'

import Link from 'next/link'
import { Menu, X, Rocket, Cpu, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
            }`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className={`glass rounded-2xl md:rounded-3xl p-2 pr-4 md:pr-6 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl border-white/10' : 'border-white/5'
                    }`}>
                    <Link href="/" className="flex items-center gap-2 group px-4 py-2">
                        <span className="font-bold text-xl tracking-tight text-white">
                            ASIL<span className="text-primary">MEDIA</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#movies" className="text-sm font-bold hover:text-primary transition-colors">
                            Kinolar
                        </Link>
                        <Link href="#services" className="text-sm font-bold hover:text-accent transition-colors">
                            Xizmatlar
                        </Link>
                        <Link
                            href="https://t.me/medicus_admin"
                            className="px-5 py-2.5 bg-white text-black rounded-xl text-sm font-black hover:bg-primary hover:text-white transition-all active:scale-95"
                        >
                            ALOQA
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-primary transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
                        <Link onClick={() => setIsMenuOpen(false)} href="#movies" className="text-xl font-bold flex items-center gap-3">
                            <Play className="w-5 h-5 text-primary" /> Kinolar
                        </Link>
                        <Link onClick={() => setIsMenuOpen(false)} href="#services" className="text-xl font-bold">
                            Xizmatlar
                        </Link>
                        <Link
                            onClick={() => setIsMenuOpen(false)}
                            href="https://t.me/medicus_admin"
                            className="w-full py-4 bg-primary text-white rounded-2xl text-center font-bold"
                        >
                            Telegram orqali bog'lanish
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
