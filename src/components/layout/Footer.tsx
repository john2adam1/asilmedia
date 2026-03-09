import Link from 'next/link'
import { Play } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1 rounded-sm">
                                <Play className="w-5 h-5 fill-white text-white" />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight uppercase">ASILMEDIA<span className="text-primary">.NET</span></span>
                        </Link>
                        <p className="text-[13px] text-muted leading-relaxed">
                            Eng sara kinolar va seriallar jamlanmasi. Biz bilan yuqori sifatli mediadan bahramand bo'ling.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Bo'limlar</h3>
                        <ul className="space-y-3 text-[13px] text-muted">
                            <li className="hover:text-primary transition-colors cursor-pointer">Bosh sahifa</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Kinolar</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Seriallar</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Multfilmlar</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Yordam</h3>
                        <ul className="space-y-3 text-[13px] text-muted">
                            <li className="hover:text-primary transition-colors cursor-pointer">Biz haqimizda</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Bog'lanish</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Qoidalar</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Ijtimoiy tarmoqlar</h3>
                        <ul className="space-y-3 text-[13px] text-muted">
                            <li className="hover:text-primary transition-colors cursor-pointer">Telegram</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted uppercase tracking-wider font-semibold">
                    <p>© 2026 <Link href="/admin" className="cursor-default hover:text-muted transition-none">ASILMEDIA.CAM</Link> All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>Dynamic Ads System</span>
                        <span>SEO Optimized</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
