"use client"; // Ensure this is at the top!

import React from "react";
import TopBar from "./home-1/TopBar";
import HeaderOne from "./home-1/Header";
import BannerOne from "./home-1/Banner";
import AboutOne from "./home-1/About";
import FacilitiesOne from "./home-1/FacilitiesOne";
import RoomOne from "./home-1/RoomOne";
import FooterOne from "./home-1/FooterOne";
import BackToTop from "./home-1/BackToTop";

function Page() {
  // Use PascalCase for Next.js pages
  return (
    <>
      {/* <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message:
            "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, // Cookie expiration in days
        }}
      /> */}
      <TopBar />
      <HeaderOne />
      <BannerOne />
      {/* <AdvanceForm /> */}
      <AboutOne />
      <FacilitiesOne />
      <RoomOne className="pt-120" />
      {/* <TestimonialOne /> */}
      {/* <VideoOne /> */}
      {/* <OfferOne /> */}
      {/* <GalleryOne /> */}
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default Page;
