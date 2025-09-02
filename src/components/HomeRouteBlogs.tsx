"use client";

import { Blog } from "@/types/project";
import HomeRouteBlogCards from "./HomeRouteBlogCards";
import { blogs as blogsData } from "@/data/blogs";
import { memo } from 'react';
import Title from "./ui/Title";

function HomeRouteBlogs() {
    const latestBlogs: Blog[] = blogsData.slice(0, 3);

    return (
        <section className='w-1/2 max-lg:w-full px-9 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='Recent Blogs' />
            {latestBlogs.map((blog: Blog, idx: number) => (
                <HomeRouteBlogCards
                    key={idx}
                    title={blog.title}
                    id={blog.id}
                    createdAt={blog.createdAt}
                />
            ))}
        </section>
    )
}

export default memo(HomeRouteBlogs);