"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import Link from "next/link";

function AboutOne() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 1 });
    }
  }, []);
  return (
    <div className="rts__section about__area is__home__main section__padding">
      <div className="section__shape d-none d-xl-block">
        <img src="/assets/images/about/section__shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="about__wrapper">
            <div className="image">
              <div
                className="position-relative radius wow fadeInUp overflow-hidden"
                data-wow-delay=".3s"
              >
                <div
                  className="jara-mask-1 jarallax image-height pt-0"
                  data-rellax-speed="2"
                >
                  {/* Ensure rellax-img is present */}
                  <img
                    src="/assets/images/real-rooms/plum-house-images/IMG_1674.jpg"
                    className="jarallax-img rellax rellax-img"
                    alt="Background"
                  />
                </div>
              </div>
              <div
                className="image__card radius-10 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon radius-10 center-item">
                  <i className="flaticon-people" />
                </div>
                <div className="content">
                  <span className="h5">50+</span>
                  <p>Experience Staff</p>
                </div>
              </div>
              <div className="image__card__image wow fadeInUp">
                <img
                  src="/assets/images/real-rooms/plum-house-images/IMG_6417.jpg"
                  width={312}
                  height={230}
                  alt="About"
                />
              </div>
            </div>
            <div className="content">
              <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                About Us
              </span>
              <h2 className="content__title wow fadeInUp">
                Welcome To PlumHouse Apo
              </h2>
              <p
                className="content__subtitle wow fadeInUp"
                data-wow-delay=".3s"
              >
                Welcome to PlumHouse Apo, where luxury meets comfort in the
                heart of Abuja. Since 2024, we have been dedicated to providing
                an exceptional stay for our guests, blending modern amenities
                with timeless elegance. Our beautifully designed rooms and
                suites offer stunning views and plush accommodations, ensuring a
                restful retreat whether you're here for business or leisure.
              </p>
              <Link
                href="#"
                className="theme-btn btn-style fill no-border wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
