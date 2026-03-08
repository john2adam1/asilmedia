'use client'

import { useState } from 'react'
import { Movie } from '@/components/movies/MovieCard'
import { supabase } from '@/lib/supabase'
import { Trash2, Plus, Film, LogOut } from 'lucide-react'

export default function AdminDashboard() {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [password, setPassword] = useState('')
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        thumbnail_url: '',
        video_url: '',
        category: 'Action',
        is_hero: false
    })

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        // Simple password check from env or hardcoded fallback
        if (password === 'admin123') { // In production use process.env.ADMIN_PASSWORD
            setIsAuthorized(true)
            fetchMovies()
        } else {
            alert('Wrong password')
        }
    }

    async function fetchMovies() {
        setLoading(true)
        const { data } = await supabase
            .from('movies')
            .select('*')
            .order('created_at', { ascending: false })
        if (data) setMovies(data as Movie[])
        setLoading(false)
    }

    async function handleDelete(id: string) {
        if (!confirm('Are you sure you want to delete this movie?')) return
        const { error } = await supabase.from('movies').delete().eq('id', id)
        if (error) alert(error.message)
        else fetchMovies()
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.from('movies').insert([formData])
        if (error) alert(error.message)
        else {
            setShowForm(false)
            fetchMovies()
            setFormData({
                title: '',
                description: '',
                thumbnail_url: '',
                video_url: '',
                category: 'Action',
                is_hero: false
            })
        }
        setLoading(false)
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="max-w-md w-full bg-card p-8 rounded-2xl border border-border shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-primary p-3 rounded-xl mb-4">
                            <Film className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-black uppercase">Admin Access</h1>
                        <p className="text-muted text-sm">Enter password to manage content</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black uppercase">Movie Manager</h1>
                    <p className="text-muted">Total movies: {movies.length}</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-primary/20"
                    >
                        <Plus className="w-5 h-5" />
                        {showForm ? 'Cancel' : 'Add Movie'}
                    </button>
                    <button
                        onClick={() => setIsAuthorized(false)}
                        className="p-2 border border-border rounded-lg hover:bg-card text-muted transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="mb-12 bg-card border border-border rounded-xl p-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <h2 className="text-xl font-bold mb-6 uppercase tracking-wider">New Movie Entry</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-muted">Title</label>
                            <input
                                type="text"
                                placeholder="Inception"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-muted">Category</label>
                            <select
                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option>Action</option>
                                <option>Horror</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Sci-Fi</option>
                                <option>Animation</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold uppercase text-muted">Description</label>
                            <textarea
                                placeholder="Brief movie summary..."
                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none min-h-[100px]"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-muted">Thumbnail URL</label>
                            <input
                                type="text"
                                placeholder="https://image-url.com/poster.jpg"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none"
                                value={formData.thumbnail_url}
                                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-muted">Video URL/Iframe</label>
                            <input
                                type="text"
                                placeholder="https://youtube.com/embed/..."
                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none"
                                value={formData.video_url}
                                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="checkbox"
                            id="is_hero"
                            checked={formData.is_hero}
                            onChange={(e) => setFormData({ ...formData, is_hero: e.target.checked })}
                            className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="is_hero" className="text-sm font-medium">Set as Hero (Featured)</label>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-primary text-white font-bold px-10 py-3 rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Save Movie'}
                    </button>
                </form>
            )}

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-muted/10 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Movie</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {loading && movies.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-muted animate-pulse italic">Connecting to database...</td>
                                </tr>
                            ) : movies.map((movie) => (
                                <tr key={movie.id} className="hover:bg-muted/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-14 bg-muted relative rounded overflow-hidden">
                                                <img src={movie.thumbnail_url} alt="" className="object-cover w-full h-full" />
                                            </div>
                                            <div className="font-bold text-white max-w-[200px] truncate">{movie.title}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold bg-muted/20 px-2 py-1 rounded">{movie.category}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted">
                                        {new Date(movie.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(movie.id)}
                                            className="p-2 text-muted hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {movies.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-muted italic">The vault is currently empty.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
