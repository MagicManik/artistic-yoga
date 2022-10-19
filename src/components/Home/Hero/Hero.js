import React from 'react';
import videoThumbnail from '../../../assets/images/Rectangle 104.png';
import playIcon from '../../../assets/icon/Vector.png';
import './Hero.css';

const Hero = () => {
    return (
        <section class="text-gray-600 body-font hero-bg-img">

            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between hero-wrapper pt-4">

                <div class="lg:flex-grow lg:max-w-[40rem] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <div className='pb-5'>
                        <h1 className='text-4xl text-black font-light'>Yoga for Flat Abs</h1>
                        <span className='text-2xl font-light block py-2'>90 Days program</span>
                    </div>
                    <div className='relative'>
                        <span className='absolute top-3 left-3'>Introduction video</span>
                        <img class="object-cover w-[640px] h-[398px] object-center rounded" alt="hero" src={videoThumbnail} />

                        <img className='absolute bottom-3 left-0 right-0 mx-auto my-auto w-[44px] h-[44px] cursor-pointer' src={playIcon} alt="" />
                    </div>
                </div>


                <div class="md:w-1/2 mt-[145px] lg:px-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className='flex gap-14 justify-center'>
                        <div className='relative'>
                            <h5 className='text-[#FE5266] font-light'>Details</h5>
                            <div className='detail-text-underline'></div>
                        </div>
                        <h5>Techniques</h5>
                    </div>
                    <p class="mb-28 leading-relaxed pr-16">Choose a quiet space so that you can do the session uninterrupted. Make sure there is at least 2 hours gap between a meal and the class. Put all other devices aside and enjoy the session.</p>
                    <span className='aed-99'>AED 99/-</span>
                    <div class="flex pt-16 justify-center">
                        <button class="inline-flex join-now-btn text-white border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 Join now font-thin">Join now</button>
                        <button class="ml-4 inline-flex view-schedule-btn text-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-thin">View Schedule</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;