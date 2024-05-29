import React from 'react';
import { Post } from '../../../types';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/client';
import Image from 'next/image';

// Define the Props interface to specify the type of posts prop
interface Props {
    posts: Post[]
}

// BlogContent component receives posts as props and renders a section containing blog post previews
const BlogContent = ({ posts }: Props) => {
    return (
        <section className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
            {
                posts.map((post) => {
                    return (
                        // Use Next.js Link for client-side navigation
                        <Link key={post._id} href="/">
                            <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-lg duration-200">
                                <div className='w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
                                    {/* Use Next.js Image component for optimized image loading */}
                                    <Image src={urlFor(post?.mainImage).url()} alt="Blog post Image" width={500} height={500} 
                                    className='w-full h-full object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md'/>
                                    <div className='bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                                    <div className='absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-slate-900 backdrop-blur-3xl rounded drop-shadow-lg text-white justify-center duration-200 p-5'>
                                        <p className="text-lg font-semibold text-white">Click to read</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-2/5 flex flex-col justify-between py-10 px-4'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center gap-2'>
                                            {
                                                post?.categories.map((item) => {
                                                    return (
                                                        <p key={item?._id} className='text-xs uppercase text-blue-600 font-semibold'>{item?.title}</p>
                                                    )
                                                })
                                            } 
                                        </div>
                                        <h2 className='text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer'>{post?.title}</h2>
                                        <p className='text-gray-500'>{post?.description}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-xs text-gray-500 font-semibold'>{new Date(post?._createdAt).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}</p>
                                        <div className='flex items-center gap-2'>
                                            <Image src={urlFor(post?.author?.image).url()} height={200} width={200} alt="Image of Author" className="rounded-full object-cover w-10"/>
                                            <p className='text-sm font-medium'>{post?.author?.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    );
}

export default BlogContent;


        </section>
    );
}

export default BlogContent;
