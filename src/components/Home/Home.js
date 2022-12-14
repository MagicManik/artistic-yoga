import React from 'react';
import Hero from './Hero/Hero';
import StructureOfProgram from './StructureOfProgram/StructureOfProgram';
import './Home.css';
import Schedule from './Schedule/Schedule';
import OurTeachers from './OurTeachers/OurTeachers';
import CustomerReviews from './CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <main className='bg-[#FDF8F4]'>
            <Hero />
            <StructureOfProgram />
            <Schedule />
            <OurTeachers />
            <CustomerReviews />
        </main>
    );
};

export default Home;