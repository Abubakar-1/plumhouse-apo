'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BreadcrumbOne({ title, description, bgImage }) {
    useEffect(() => {
            AOS.init({
                duration: 800, // Animation duration
                once: true,    // Ensures animations run once
                easing: 'ease-in-out', // Smooth animation
            });
        }, []);
    return (
        <>
            {/* page header */}
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <h1 data-aos="fade-up">{title}</h1>
                                <p className="font-sm" data-aos="fade-up">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page header end */}
        </>
    )
}

export default BreadcrumbOne