import Link from 'next/link';
import { Props } from 'next/script';
import React from 'react';

// Logo component to display a clickable logo with a title and optional class names for styling
const Logo = ({ title, className }: Props) => {
    return (
        <div>
            {/* Link component from Next.js for client-side navigation */}
            <Link href="/">
                {/* The title is rendered as an H1 element with dynamic class names for styling */}
                <h1 className={`text-3xl font-bold p-6 ${className}`}>{title}</h1>
            </Link>   
        </div>
    );
}

export default Logo;
