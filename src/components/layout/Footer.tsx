import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-[#1a1c23] border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Left side: Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/copyright"
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                        >
                            To copyright holders
                        </Link>
                        <Link
                            href="/feedback"
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                        >
                            Feedback
                        </Link>
                        <Link
                            href="/dmca"
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                        >
                            DMCA
                        </Link>
                    </div>

                    {/* Right side: Copyright & Info */}
                    <div className="text-[#9ca3af] text-[13px] leading-relaxed max-w-2xl text-left md:text-right">
                        <p className="mb-2">
                            Copyright © 2015-2026. Administrator - Telegram: <a href="https://t.me/asilmedia_support_bot" className="text-primary hover:underline">@asilmedia_support_bot</a> . For copyright holders .
                        </p>
                        <p className="mb-2">
                            <Link href="/admin" className="cursor-default">
                                All
                            </Link> rights reserved. Film rights belong to their respective authors. All films are provided for informational purposes only. The administration is not responsible for illegal materials posted by users! Any film will be removed at the request of the copyright holder.
                        </p>
                        <p className="text-primary">
                            The site is located on the TAS-IX network.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
