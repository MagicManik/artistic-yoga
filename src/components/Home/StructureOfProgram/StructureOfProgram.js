import React from 'react';
import structureImg from '../../../assets/images/structure.png';
import './StructureOfProgram.css';

const StructureOfProgram = () => {
    return (
        <section class="text-gray-600 body-font mt-10 bg-[#FFF3E9]">
            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between hero-wrapper">

                <div class="lg:flex-grow lg:max-w-[40rem] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <h5 className='text-4xl text-black font-light'>Structure of program</h5>
                    <p className='text-2xl font-light block py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod.</p>
                    <span className='days-of-99'>90 <sub className='text-black text-[48%]'>Days</sub></span>
                    <div>
                        <span>Yoga | Recovery | Rest | Repeat</span>
                    </div>
                </div>

                <div class="md:w-1/2 lg:px-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <img src={structureImg} alt="" />
                </div>

            </div>
        </section>
    );
};

export default StructureOfProgram;