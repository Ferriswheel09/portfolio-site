"use client";

import { useRouter } from 'next/navigation'
import React from 'react';
interface PostProps{
    coverImage: string | "/_posts/gradient.jpeg";
    title: string | "No Title";
    excerpt: string | "No Excerpt";
    slug: string | "No Slug";
}

const BlogCard = ({post}:{post: PostProps, index:number}) => {

    const router = useRouter();

    const handleClick = (slug: string) => {
        console.log("Click detected")
        router.push(`/posts/${slug}`);
      }
    

    return(
        <div onClick={() => handleClick(post.slug)} className='bg-post-card shadow-xl shadow-neutral-500 transition mx-auto h-72 max-w-3xl border-4 p- hover:shadow-xl hover:shadow-neutral-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer'>
            <img 
            src={post.coverImage} 
            alt='Not loaded'
            className='w-full max-h-40'
            />
            <h1 className='text-2xl pl-1 pt-2 font-gothic'>{post.title}</h1>
            <p className='font-abel pl-1 text-lg text-wrap'>{post.excerpt}</p>
      </div>
    )
}

export default BlogCard;