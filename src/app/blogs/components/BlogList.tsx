import { Blog } from '@/types/project'
import BlogCard from './BlogCard'
import { blogs } from '@/data/blogs'

async function BlogList() {
    return (
        <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-6 items-center mt-4 pb-8 max-sm:overflow-hidden'>
            {blogs.map((blog: Blog, idx: number) => (
                <BlogCard
                    key={idx}
                    title={blog.title}
                    createdAt={blog.createdAt}
                    content={blog.content}
                    id={blog.id}
                />
            ))}
        </div>
    )
}

export default BlogList