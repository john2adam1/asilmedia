interface AdPlaceholderProps {
    label: string
    className?: string
}

export function AdPlaceholder({ label, className = "" }: AdPlaceholderProps) {
    return (
        <div className={`ad-container min-h-[100px] ${className}`}>
            <span>ADVERTISEMENT: {label}</span>
        </div>
    )
}

export function TopAd() {
    return <AdPlaceholder label="Top Banner Ad" className="max-w-4xl mx-auto h-24 mb-8" />
}

export function SidebarAd() {
    return <AdPlaceholder label="Sidebar Ad" className="w-full aspect-[4/5]" />
}

export function MidAd() {
    return <AdPlaceholder label="Below Video Ad" className="w-full h-32 my-12" />
}
