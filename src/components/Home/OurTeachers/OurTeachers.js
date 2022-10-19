import React from 'react';
import teacherImg from '../../../assets/images/teacher.png';
import teacherBgImg from '../../../assets/images/teacher-bg.png';
import videoPreviousBtn from '../../../assets/icon/video-previous-btn.png';
import videoNextBtn from '../../../assets/icon/video-next-btn.png';
import './OurTeachers.css';

const OurTeachers = () => {
    return (
        <section class="text-gray-600 body-font mt-20 pb-16">
            <div className='container mx-auto flex px-5 hero-wrapper'>
                <span className='text-4xl font-thin text-black'>Our Teachers</span>
            </div>
            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between hero-wrapper">

                <div class="md:w-1/2 lg:px-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center my-10">
                    <div className='flex flex-col gap-7'>
                        <span className='ml-5'>Ashrei Mitra</span>
                        <span className='ml-5'>Rahul</span>
                        <span className='active-teacher'>Ashrei Mitra</span>
                        <span className='ml-5'>Ashray</span>
                        <span className='ml-5'>Ashish</span>
                        <span className='ml-5'>Zora</span>
                    </div>
                </div>
                <div>
                    <div class="lg:flex-grow lg:max-w-[65rem] lg:w-full md:w-1/2 w-11/12 mb-10 md:mb-0 bg-[#C4C4C4] flex lg:flex-row flex-col mx-auto rounded-[16px]">

                        <img className='w-[210px] h-[238px] pl-5 pt-10 rounded-br-[16px] teacher-img-bg' src={teacherBgImg} alt="" />


                        <p className='mt-16 pb-9 px-8 font-light'>Ashrei Mitra started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations</p>
                        <img className='absolute rounded-br-[16px]' src={teacherImg} alt="" />
                    </div>

                    <div className='flex justify-end mt-[23px] gap-5 lg:pr-[.6px] pr-8'>
                        <button><img className='w-4' src={videoPreviousBtn} alt="" /></button>
                        <button><img className='w-4' src={videoNextBtn} alt="" /></button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurTeachers;