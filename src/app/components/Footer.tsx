import React from 'react';
import Logo from './Logo';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';

// Footer component to display footer section with logo, social media icons, and copyright notice
export default function Footer() {
    return (
        <section className='bg-black pt-6'>
            <div className="md:justify-between flex flex-col md:flex-row">
                {/* Logo component with title "BLOGGERS" */}
                <Logo title="BLOGGERS" className="text-white hover:text-pink-600"/>
                
                {/* Social media icons with links */}
                <div className="flex gap-y-2 gap-x-4 text-white p-6">
                    <Link href="https://www.linkedin.com/in/syedshahmirsultan/">
                        <BsYoutube size={26} className='text-gray-300 hover:text-red-600'/>
                    </Link>
                    <Link href="https://github.com/syedshahmirsultan">
                        <BsInstagram size={24} className='text-gray-300 hover:text-pink-600'/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/syedshahmirsultan/">
                        <BsFacebook size={24} className='text-gray-300 hover:text-blue-600'/>
                    </Link>
                    <Link href="https://github.com/syedshahmirsultan">
                        <BsGithub size={24} className='text-gray-300 hover:text-green-700'/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/syedshahmirsultan/">
                        <BsLinkedin size={24} className='text-gray-300 hover:text-blue-600'/>
                    </Link>
                </div>
                
                {/* Copyright notice */}
                <div>
                    <Link href="https://github.com/syedshahmirsultan">
                        <p className='text-gray-300 text-md font-semibold p-6 hover:text-white cursor-pointer'>
                            © All rights reserved @syedshahmirsultan
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
