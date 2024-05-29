import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-screen bg-white flex'>
            <img src="/Images/bannerImg.png" alt="Hero Image" className="max-w-full mx-auto h-auto md:h-screen object-cover md:object-contain"/>
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4 lg:pt-20 lg:px-18">
                <h2 className='text-5xl sm:text-6xl lg:text-[110px] font-bold text-gray-100'>TAILOR SMITH</h2>
                <p className='text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6'>TRAVELLER, PHOTOGRAPHER</p>
            </div>
        </div>
    );
}

export default Hero;
