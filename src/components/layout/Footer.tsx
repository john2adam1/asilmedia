import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-black border-t border-border py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>Home</li>
                            <li>Movies</li>
                            <li>TV Shows</li>
                            <li>New Releases</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>Help Center</li>
                            <li>Account</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-white font-bold mb-4">FILM.NET</h3>
                        <p className="text-sm text-muted">
                            High-performance movie streaming experience. Optimized for speed and quality.
                        </p>
                    </div>
                </div>
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
                    <p>© 2026 FILM.NET. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>Dynamic Ads System</span>
                        <span>SEO Optimized</span>
                        <Link
                            href="/admin"
                            className="text-[10px] text-muted hover:text-primary opacity-50 hover:opacity-100 transition-all uppercase tracking-widest font-bold border border-border/50 px-2 py-0.5 rounded"
                        >
                            Admin Access
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
