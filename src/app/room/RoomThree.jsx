import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import RoomCardTwo from './RoomCardTwo';

function RoomThree({ posts = [] }) {
    return (
        <>
            {/* our rooms */}
            <div className="rts__section room has__background has__shape section__padding">
                <div className="section__shape">
                    <div className="shape__1 wow fadeInLeft">
                        <img src="/assets/images/shape/room-3.png" alt="" />
                    </div>
                    <div className="shape__2 wow fadeInRight">
                        <img src="/assets/images/shape/room-4.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row position-relative justify-content-center text-center mb-60">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar is__home__two">
                                <span className="h6 subtitle__icon__three mx-auto text-white">
                                    Room
                                </span>
                                <h2 className="section__title text-white">Our Rooms</h2>
                            </div>
                        </div>
                        <div className="full__width__nav is__room__slider">
                            <div className="rts__slide">
                                <div className="next slider-button-prev">
                                    <svg
                                        width={41}
                                        height={22}
                                        viewBox="0 0 41 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.25536 9.75546H39.0408C39.7335 9.75546 40.2931 10.3151 40.2931 11.0078C40.2931 11.7005 39.7335 12.2601 39.0408 12.2601H4.28054L11.8807 19.8603C12.3699 20.3495 12.3699 21.1439 11.8807 21.6331C11.3915 22.1223 10.597 22.1223 10.1078 21.6331L0.366985 11.8923C0.00693893 11.5322 -0.098732 10.9961 0.0969467 10.5264C0.292625 10.0607 0.750515 9.75546 1.25536 9.75546Z"
                                            fill="#65676B"
                                        />
                                        <path
                                            d="M11.0079 0.0028038C11.3288 0.0028038 11.6497 0.124125 11.8924 0.370679C12.3816 0.859874 12.3816 1.65432 11.8924 2.14352L2.13979 11.8961C1.6506 12.3853 0.856151 12.3853 0.366956 11.8961C-0.122239 11.4069 -0.122239 10.6125 0.366956 10.1233L10.1195 0.370679C10.3661 0.124125 10.687 0.0028038 11.0079 0.0028038Z"
                                            fill="#65676B"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="rts__slide">
                                <div className="prev slider-button-next">
                                    <svg
                                        width={41}
                                        height={22}
                                        viewBox="0 0 41 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M39.0374 12.2499L1.25198 12.245C0.55928 12.2449 -0.000286104 11.6852 -0.000196778 10.9925C-0.000107452 10.2998 0.559603 9.74024 1.2523 9.74033L36.0125 9.74481L28.4134 2.14371C27.9242 1.65445 27.9243 0.859997 28.4136 0.370865C28.9029 -0.118267 29.6973 -0.118164 30.1864 0.371094L39.926 10.1132C40.286 10.4733 40.3916 11.0095 40.1959 11.4791C40.0001 11.9447 39.5422 12.2499 39.0374 12.2499Z"
                                            fill="#65676B"
                                        />
                                        <path
                                            d="M29.2835 22.0013C28.9626 22.0012 28.6417 21.8799 28.3991 21.6333C27.9099 21.144 27.91 20.3496 28.3993 19.8604L38.1531 10.1091C38.6424 9.61998 39.4368 9.62008 39.926 10.1093C40.4151 10.5986 40.415 11.393 39.9257 11.8822L30.1719 21.6335C29.9253 21.88 29.6044 22.0013 29.2835 22.0013Z"
                                            fill="#65676B"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">
                        <Swiper
                            className="room__slider is__home__four"
                            modules={[Navigation]}
                            direction="horizontal"
                            slidesPerView={2}
                            spaceBetween={30}
                            loop={posts.length > 1}
                            centeredSlides={false}
                            autoplay="false"
                            navigation={{
                                nextEl: ".slider-button-next",
                                prevEl: ".slider-button-prev",
                            }}
                            speed={1000}
                            effect="slide"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            {/* Dynamic Room Data - Slice to show a specific range */}
                            {posts.length > 0 ? (
                                posts.slice(0, 3).map((data) => ( // Adjust slice to show posts from 4th to 6th
                                    <SwiperSlide key={data.id}>
                                        <RoomCardTwo
                                            roomID={data.id}
                                            roomImage={data.image}
                                            roomTitle={data.title}
                                            roomPrice={data.price}
                                        />
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide>
                                    <p className="text-center">No rooms available</p>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* our rooms end */}
        </>

    )
}

export default RoomThree