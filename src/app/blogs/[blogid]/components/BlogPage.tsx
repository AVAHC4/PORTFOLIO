'use client';

import Image from 'next/image'
import React from 'react'

type PublicId = {
    public_id: string
}

const BlogPage = ({ public_id }: PublicId) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const src = cloudName
        ? `https://res.cloudinary.com/${cloudName}/image/upload/${public_id}`
        : '/adobe.png'; // fallback local image

    return (
        <Image
            width={900}
            height={900}
            src={src}
            alt="Blog Image"
            className="rounded-[10px] h-auto w-auto max-w-full"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
        />
    )
}

export default BlogPage