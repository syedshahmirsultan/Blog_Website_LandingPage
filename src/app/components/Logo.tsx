import Link from 'next/link';
import { Props } from 'next/script';
import React from 'react';

const Logo = ({title,className} :Props) => {
    return (
        <div>
         <Link href="/"><h1 className={`text-3xl font-bold p-6 ${className}`}>{title}</h1></Link>   
        </div>
    );
}

export default Logo;
