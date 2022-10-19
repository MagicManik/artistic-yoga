import React from 'react';
import yogaImg from '../../../assets/images/yoga.png';
import classVideoThumbnail from '../../../assets/images/class-video-thumbnail.png';
import videoPreviousBtn from '../../../assets/icon/video-previous-btn.png';
import videoNextBtn from '../../../assets/icon/video-next-btn.png';
import weekBtn from '../../../assets/icon/week-btn.png';
import './Schedule.css';

const Schedule = () => {
    return (
        <section class="text-gray-600 body-font mt-10">
            <div className='container mx-auto flex px-5 hero-wrapper'>
                <span className='text-2xl font-thin text-black'>Schedule</span>
            </div>
            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between hero-wrapper">

                <div class="md:w-1/2 lg:px-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <img className=' w-3/4' src={yogaImg} alt="" />
                </div>

                <div class="lg:flex-grow lg:max-w-[35rem] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <div className='flex justify-between pb-5'>
                        <span className='text-black text-2xl font-thin'>Day 1- Class</span>
                        <div className='flex gap-5 pr-[.6px]'>
                            <button><img className='w-4' src={videoPreviousBtn} alt="" /></button>
                            <button><img className='w-4' src={videoNextBtn} alt="" /></button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='w-full mb-2' src={classVideoThumbnail} alt="" />
                        <div className='absolute right-0 top-1/2 flex gap-4 bg-white py-4 px-6 items-center week-btn'>
                            <span className='text-black'>Week 1</span>
                            <button><img className='h-4 w-4' src={weekBtn} alt="" /></button>
                        </div>
                    </div>
                    <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='mt-3 join-today-btn'>Join Today</button>
                </div>

            </div>
        </section>
    );
};

export default Schedule;