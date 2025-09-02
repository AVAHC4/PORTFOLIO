import { notFound } from 'next/navigation'
import { blogs } from '@/data/blogs'

export async function getBlog(blogId: string) {
    const blog = blogs.find((b) => b.id === blogId)
    if (!blog) {
        notFound()
    }
    return blog
}