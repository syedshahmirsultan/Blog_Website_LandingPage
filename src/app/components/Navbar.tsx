import React from 'react';
import Logo from './Logo';
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
 const navigation =[
    { id:1, title :"HOME", href:"/"   },
    {  id:2, title :"FEATURES", href:"/features"   },
    {  id:3, title :"ABOUT ME", href:"/aboutme"   },
    {  id:4, title :"STUDIO", href:"/studio"   }



 ]

    return (
    <section className='bg-white h-20 shadow-md top-0 sticky w-full backdrop-blur-2xl transition-colors z-50'>
    <div className='flex justify-between w-full'>
<div>
<Logo title={"BLOGGERS"} className='text-black hover:text-pink-500'/>
</div>

<div className='hidden md:flex md:justify-center gap-x-6 p-7 uppercase'>
{
    navigation.map(item => {
    return (
   <div key={item.id} className="text-sm font-bold text-slate-600 hover:text-black group relative  overflow-hidden"><Link href={item.href}>{item.title}
   <span className='w-full h-[3px] bg-blue-700 absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-hover:-translate-x-0 transition-transform duration-200'>
    </span></Link></div>
    )
    })
}
</div>
<FiMenu size={30} className="flex md:hidden m-7 "/>
</div></section>
    );
}

export default Navbar;
