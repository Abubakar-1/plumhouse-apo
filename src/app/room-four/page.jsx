import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import BreadcrumbOne from "../breadcrumb/Breadcrumb";
import RoomNine from "../room/RoomNine";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";

function page() {
  return (
    <>
      {/* <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            /> */}
      <TopBar />
      <HeaderOne />
      <BreadcrumbOne
        title="Deluxe Room"
        description="A step up from the standard room, often with better views, more space, and additional amenities."
      />
      <RoomNine />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;
