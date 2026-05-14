import Link from 'next/link'

export function Footer() {
    return (
        <footer className="py-10 border-t border-white/5 bg-background">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
                <p>© 2026 AsilMedia. Barcha huquqlar himoyalangan.</p>
                <div className="flex items-center gap-6">
                    <Link href="https://t.me/medicus_admin" className="hover:text-primary transition-colors">Telegram</Link>
                    <span className="font-bold opacity-30 uppercase tracking-widest text-[10px]">Directed by John2Adam</span>
                </div>
            </div>
        </footer>
    )
}
