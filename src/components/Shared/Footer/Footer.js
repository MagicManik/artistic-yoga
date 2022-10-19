import React from 'react';
import envelop from '../../../assets/icon/envelop.png';
import whatsApp from '../../../assets/icon/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
        <section className=''>
            <div className='bg-[#FFF3E9] lg:px-24 px-6 py-9'>
                <div className='flex lg:flex-row flex-col justify-between items-center pb-3'>
                    <span className='text-black font-light text-[1.2rem]'>Let's talk</span>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='font-light'>someone@example.com</span>
                        <img src={envelop} alt="" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <span className='text-2xl font-light'>Book an appointment?</span>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='font-light'>+91- 385 526 5060</span>
                        <img src={whatsApp} alt="" />
                    </div>
                </div>
                <div className='horizontal-line'></div>

                <div className='w-[520px] py-8'>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae facilisis lorem. Integer non pharetra mauris, non tincidunt metus. Aenean in lectus diam...</p>
                </div>
            </div>
            <div className='bg-black text-white text-center py-5'>
                <p className='font-light'>
                    © 2021 Copyright - Artistic yoga
                    <span className='footer-link-btn lg:inline block'><a className='footer-link-a' href="/">Privacy policy</a></span>
                    <span className='footer-link-btn'><a className='footer-link-a' href="/">Terms of use</a></span>
                </p>
            </div>
        </section>
    );
};

export default Footer;