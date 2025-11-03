'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Modal from './Modal';
// import Modal from './Modal'; // Import the Modal component

function GalleryOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Function to open the modal with the selected image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* gallery */}
      <div className="rts__section is__home__main">
        <div className="container-fluid">
          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6 wow fadeInUp">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  Instagram Post
                </span>
                <h2 className="section__title">Follow on&nbsp;Instagram</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              className="insta__gallery__slider overflow-hidden gallery"
              direction="horizontal"
              slidesPerView={6}
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
              }}
              speed={1000}
              effect="slide"
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
            >
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/1.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/1.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/1.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/2.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/2.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/2.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/3.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/3.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/3.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/4.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/4.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/4.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/5.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/5.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/5.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/6.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/6.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/6.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
              <SwiperSlide>
                <div className="gallery__item">
                  <img
                    src="/assets/images/insta/3.webp"
                    height={300}
                    width={300}
                    alt=""
                    onClick={() => openModal('assets/images/insta/3.webp')} // Open modal on image click
                  />
                  <a
                    href="#0"
                    className="gallery__popup"
                    onClick={() => openModal('assets/images/insta/3.webp')} // Open modal on anchor click
                  >
                    <img
                      src="/assets/images/icon/instagram.svg"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
              {/* More SwiperSlide components here... */}
              {/* Single gallery image */}
            </Swiper>
          </div>
        </div>
      </div>
      {/* gallery end */}

      {/* Modal to display image */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
    </>
  );
}

export default GalleryOne;
