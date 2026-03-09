import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'http://localhost:3000'

    // Fetch all movies for dynamic routes
    const { data: movies } = await supabase
        .from('movies')
        .select('id, updated_at')

    const movieEntries = (movies || []).map((movie) => ({
        url: `${baseUrl}/movie/${movie.id}`,
        lastModified: new Date(movie.updated_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Static and category routes
    const categories = ['action', 'comedy', 'drama', 'horror', 'sci-fi'] // Add more if needed
    const categoryEntries = categories.map((cat) => ({
        url: `${baseUrl}/category/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        ...categoryEntries,
        ...movieEntries,
    ]
}
