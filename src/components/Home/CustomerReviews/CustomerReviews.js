import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import reviewBackground from '../../../assets/others/review-background.svg';
import quot from '../../../assets/others/quot.png';
import manik from '../../../assets/images/manik.jpg';
import arafat from '../../../assets/images/arafat.jpg';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './CustomerReviews.css';

const CustomerReviews = () => {

    const reviews = [
        {
            name: 'Amena Akter',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Manik Islam Mahi',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Md Zahin Uddin',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Monir Hossain',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Yesin Arafat',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Osman',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        },
        {
            name: 'Meherin',
            img: manik,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corrupti architecto consequatur delectus ipsum iusto iste suscipit beatae temporibus? Maiores velit saepe nihil quo non quos dolorem obcaecati delectus laudantium.'
        }
    ]

    return (
        <section className='bg-accent pb-12'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                modules={[Pagination]}
                className="mySwiper swiper-mx"
            >
                {
                    reviews.map(review =>
                        <SwiperSlide className='my-20 mb-32'>
                            <img className='relative' src={reviewBackground} alt="" />
                            <div className='h-80 absolute top-16 left-4 rounded-3xl bg-white shadow-lg px-6 pb-4 pt-7 mb-10'>
                                <div className='flex'>
                                    <img className='w-16 h-16 rounded-full ' src={review.img} alt="" />
                                    <h5 className='text-2xl font-light ml-3'>{review.name}</h5>
                                </div>
                                <p className='pt-5 font-light text-[#5c5c5c] cursor-move'>{review.review.slice(0, 280)}...</p>
                                <div className='absolute top-[-17px]'>
                                    <img src={quot} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </section>
    );
};

export default CustomerReviews;