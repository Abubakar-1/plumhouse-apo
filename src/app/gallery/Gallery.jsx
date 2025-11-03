"use client";
import React, { useState } from "react";
import Modal from "../home-1/Modal";

function GalleryFive() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

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
      {/* restaurant room */}
      <div className="rts__section pt-120">
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  Gallery
                </span>
                <h2 className="section__title">Our Restaurant Gallery</h2>
              </div>
              <p>
                Our rooms offer a harmonious blend of comfort and elegance,
                designed to provide an exceptional stay for every guest Each
                room features plush bedding.
              </p>
            </div>
          </div>
          <div className="row g-30 gallery">
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/1.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/1.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/2.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/2.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/3.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/3.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/4.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/4.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/5.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/5.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/6.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/6.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/7.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/7.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery__item">
                <span className="gallery__link"></span>
                <img
                  src="/assets/images/pages/gallery/8.webp"
                  alt=""
                  onClick={() =>
                    openModal("assets/images/pages/gallery/8.webp")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* restaurant room end */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </>
  );
}

export default GalleryFive;
