import React from 'react';
import userProfileImg from '../../assets/images/user-profile.png';
import penIcon from '../../assets/icon/pen.png';
import circleShape from '../../assets/icon/circle.png';
import './MyAccount.css';

const MyAccount = () => {
    return (
        <section className='my-account-page'>
            <h1 className='my-account-title'>MY <span className='account'>ACCOUNT</span></h1>
            <div className='profile'>
                <div className=' relative'>
                    <img className='profile-img z-0' src={userProfileImg} alt="" />
                    <img className='absolute z-50 w-12 top-3 right-5' src={penIcon} alt="" />
                    <img className='absolute z-50 w-12 bottom-0 right-5' src={circleShape} alt="" />

                </div>
            </div>
            <div className='my-account-form'>
                <div>
                    <label htmlFor="">Name</label>
                    <div className='detail-info'>
                        <h3 className=' font-light text-[1.2rem] text-[#5a5a5a]'>Arjun G N</h3>
                        <h5 className=' font-light text-[1.2rem]'>Edit</h5>
                    </div>
                    <label htmlFor="">Email</label>
                    <div className='detail-info'>
                        <h3 className=' font-light text-[1.2rem] text-[#5a5a5a]'>arjun@gmail.com</h3>
                        <h5 className=' font-light text-[1.2rem]'>Edit</h5>
                    </div>
                    <label htmlFor="">Phone</label>
                    <div className='detail-info'>
                        <h3 className=' font-light text-[1.2rem] text-[#5a5a5a]'>9826369270</h3>
                        <h5 className=' font-light text-[1.2rem]'>Edit</h5>
                    </div>
                    <div className='detail-info'>
                        <label htmlFor="">Password</label>
                        <h5 className=' font-light text-[1.2rem]'>Change password</h5>
                    </div>
                    <label htmlFor="">Subscription Details</label>
                    <div className='detail-info subscription'>
                        <div>
                            <h3 className='text-3xl pb-2 font-light'>1 Year membership for 750 AED</h3>
                            <h4 className='py-1 font-light text-2xl text-[#5a5a5a]'>Started on: 13-11-2020</h4>
                            <h4 className='py-1 font-light text-2xl text-[#5a5a5a]'>Valid till: 13-11-2021</h4>
                            <h6 className='py-1 font-light text-2xl text-[#5a5a5a]'>Subscription history</h6>
                            <h5 className='lg:hidden block pt-5 font-light text-[1.2rem]'>Change plan</h5>
                        </div>

                        <h5 className='lg:block hidden font-light text-[1.2rem]'>Change plan</h5>
                    </div>
                    <label htmlFor="">Referral Details</label>
                    <div className='detail-info'>
                        <p className='text-2xl text-[#5a5a5a] font-light'>Share your referral code and earn cash credits for each friend that subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend receives a 5 USD credit.</p>
                    </div>
                    <div className='referral'>
                        <h4 className='pb-2 font-light text-2xl text-[#5a5a5a]'>Referral Code: HSAGBWBDAV</h4>
                        <h5 className=' font-light text-[1.2rem]'>Copy</h5>
                    </div>
                    <h6>Referral History</h6>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;