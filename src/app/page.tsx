import { Clapperboard, Play, Rocket, MessageSquare, Cpu, Zap, Star, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section with Movie Poster Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] animate-pulse-slow"
            style={{
              backgroundImage: "url('/movie-bg.png')",
              opacity: 0.6
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-5xl mx-auto text-left w-full relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
            Bepul online kinolar, <br />
            istalgan joyda ko'ring.
          </h1>

          <p className="max-w-2xl text-zinc-300 text-lg md:text-xl font-normal leading-relaxed">
            Izlaganingizni topish endi oson! AsilMedia sizga eng yaxshi
            va sifatli filmlarni mutlaqo bepul tomosha qilish imkonini beradi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <Link href="https://t.me/medicus_admin" className="px-8 py-4 bg-primary hover:bg-primary-hover text-black rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              Hoziroq Ko'rish
            </Link>
            <Link href="https://t.me/medicus_admin" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium text-lg transition-all glass">
              Biz bilan bog'lanish
            </Link>
          </div>
        </div>
      </section>

      {/* Vibe Coding Banner Section */}
      <section className="px-4 py-20 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="relative glass rounded-3xl p-8 md:p-12 border-white/10 overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Vibe codingni o'rgatamiz
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Sun'iy intellekt va eng zamonaviy texnologiyalar yordamida
                  dasturlashni o'rganing. Kelajakni biz bilan kashf qiling.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="https://t.me/medicus_admin" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-primary hover:text-white rounded-2xl font-bold text-lg transition-all active:scale-95 group">
                  Yozilish <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
