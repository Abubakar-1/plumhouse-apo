"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import RoomCardOne from "../room/RoomCardOne";
import { useGetPublicRoomsQuery } from "../../../features/api/publicApiSlice";

function RoomOne({ className }) {
  // 1. Fetch data using the RTK Query hook
  const { data: rooms, isLoading, isError } = useGetPublicRoomsQuery();

  // 2. Handle the loading state
  if (isLoading) {
    return (
      <div className={`rts__section ${className}`}>
        <div className="container">
          {/* We can show a simple loading text while preserving the layout */}
          <p>Loading rooms...</p>
        </div>
      </div>
    );
  }

  // 3. Handle the error state
  if (isError) {
    return (
      <div className={`rts__section ${className}`}>
        <div className="container">
          <p>Error: Could not load rooms.</p>
        </div>
      </div>
    );
  }

  // Use the fetched rooms, providing an empty array as a fallback
  const availableRooms = rooms || [];

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
                Our rooms offer a blend of comfort and elegance, designed to
                provide an exceptional stay for every guest. Each room features
                plush bedding, high-quality linens, and a selection of pillows
                to ensure a restful night's sleep.
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
          slidesPerView={3}
          spaceBetween={30}
          loop={availableRooms.length > 1} // Use live data for loop condition
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
          {availableRooms.length > 0 ? (
            availableRooms.map((data) => (
              <SwiperSlide key={data.id}>
                <RoomCardOne
                  // Use the room ID to construct a link to the details page
                  Slug={`${data.id}`}
                  // Our public API provides the primary image at images[0]
                  Img={data.images[0]?.url || "/placeholder.jpg"} // Use a fallback image
                  Title={data.name} // API uses 'name'
                  Price={data.price} // API uses 'price'
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
