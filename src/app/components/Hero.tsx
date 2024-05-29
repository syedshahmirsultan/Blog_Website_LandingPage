import React from 'react';

// Hero component definition
const Hero = () => {
    return (
        // Container div with relative positioning, full width, full height, white background, and flex display
        <div className='relative w-full h-screen bg-white flex'>
            {/* Image element with responsive settings */}
            <img 
                src="/Images/bannerImg.png" 
                alt="Hero Image" 
                className="max-w-full mx-auto h-auto md:h-screen object-cover md:object-contain"
            />
            {/* Overlay div with semi-transparent black background, centered content, and responsive padding */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4 lg:pt-20 lg:px-18">
                {/* Heading with responsive text sizes and styles */}
                <h2 className='text-5xl sm:text-6xl lg:text-[110px] font-bold text-gray-100'>
                    TAILOR SMITH
                </h2>
                {/* Subheading with responsive text sizes, font styles, and margin top */}
                <p className='text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6'>
                    TRAVELLER, PHOTOGRAPHER
                </p>
            </div>
        </div>
    );
}

// Exporting the Hero component for use in other parts of the application
export default Hero;
