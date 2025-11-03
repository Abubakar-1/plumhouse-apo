import React from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BreadcrumbOne from '../breadcrumb/Breadcrumb'
import EventTwo from './Event'
import NewsletterThree from './Newsletter'
import ServiceSix from './Service'
import FooterOne from '../home-1/FooterOne'
import BackToTop from '../home-1/BackToTop'
import GDPRCookie from '../home-1/GDPRCookie'

function page() {
    return (
        <>
            <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            />
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Events"
                description="Our diverse range of activities is designed to offer something for everyone."
            />
            <EventTwo />
            <NewsletterThree />
            <ServiceSix />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page