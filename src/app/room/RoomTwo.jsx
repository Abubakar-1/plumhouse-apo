import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import RoomCardOne from './RoomCardOne';

function RoomTwo({ posts = [] }) { // Default value to prevent 'undefined' error
    return (
        <>
            {/* our room */}
            <div className="rts__section section__padding">
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
                    {/* row end */}
                    <div className="row">
                        <Swiper
                            className="room__slider overflow-hidden wow fadeInUp"
                            data-wow-delay=".5s"
                            modules={[Pagination]}
                            slidesPerView={3} // Show only 1 slide at a time
                            spaceBetween={30}
                            loop={posts.length > 1} // Loop only if more than 1 slide
                            centeredSlides={true}
                            autoplay={false}
                            pagination={{
                                el: ".rts-pagination",
                                clickable: true,
                            }}
                            speed={1000}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                575: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                                1400: { slidesPerView: 3 },
                            }}
                        >
                            {/* Dynamic Room Data - Slice to show a specific range */}
                            {posts.length > 0 ? (
                                posts.slice(2, 6).map((data) => ( // Adjust slice to show posts from 4th to 6th
                                    <SwiperSlide key={data.id}>
                                        <RoomCardOne
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
                        {/* pagination button */}
                        <div className="rts__pagination">
                            <div className="rts-pagination" />
                        </div>
                        {/* pagination button end */}
                    </div>
                </div>
            </div>
            {/* our room end */}
        </>
    );
}

export default RoomTwo;
