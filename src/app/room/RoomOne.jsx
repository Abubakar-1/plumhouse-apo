import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import RoomCardOne from './RoomCardOne';
import posts from '../data/data-room.json';

function RoomOne({ className }) {
    console.log(posts); // Debug: Check if multiple rooms exist

    return (
        <div className={`rts__section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="section__wrapper mb-40 wow fadeInUp">
                        <div className="section__content__left">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                Room
                            </span>
                            <h2 className="content__title h2 lh-1">Our Rooms</h2>
                        </div>
                        <div className="section__content__right">
                            <p>
                                Our rooms offer a harmonious blend of comfort and elegance,
                                designed to provide an exceptional stay for every guest. Each room
                                features plush bedding, high-quality linens, and a selection of
                                pillows to ensure a restful night's sleep.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className="row">
                <Swiper
                    className="main__room__slider overflow-hidden wow fadeInUp"
                    data-wow-delay=".5s"
                    modules={[Pagination]}
                    slidesPerView={3}  // Try increasing this
                    spaceBetween={30}
                    loop={posts.length > 1}  // Disable loop if only 1 item
                    autoplay={false}
                    pagination={{ el: ".rts-pagination", clickable: true }}
                    speed={1000}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        575: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2.5 },
                        1200: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                >
                    {/* Dynamic Room Data */}
                    {posts.length > 0 ? (
                        posts.map((data) => (
                            <SwiperSlide key={data.id}>
                                <RoomCardOne
                                    Slug={data.slug}
                                    Img={`${data.image}`}
                                    Title={data.title}
                                    Price={data.price}
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No rooms available</p>
                    )}
                </Swiper>

                {/* Pagination */}
                <div className="rts__pagination">
                    <div className="rts-pagination" />
                </div>
            </div>
        </div>
    );
}

export default RoomOne;
