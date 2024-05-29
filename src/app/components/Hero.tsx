// import React from 'react';
// import Image from 'next/image'

// const Hero = () => {
//     return (
//         <div className='w-full max-h-screen'>
//          <img src={"/Images/bannerImg.png"} alt="Hero Image" className="w-full max-h-screen object-contain"/>
//           <div className="w-full h-full top-0 text-start bg-black/60 absolute object-cover flex flex-col justify-center mx-auto lg:pt-40 lg:m-18 items-center text-white">
//             <h2 className='text-6xllg:text-[110px] font-bold '>TAYLOR SMITH</h2>
//             <text className='text-xl md:text-2xl m-4 lg:text-5xl font-semibold md:m-6'>TRAVELLER , PHOTOGRAPHER</text>
//             </div>  
//         </div>
//     );
// }

// export default Hero;

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
