import Link from 'next/link'
import React from 'react'

function BlogBanner() {
    return (
        <>
            <div className="rts-hosting-banner rts-hosting-banner-bg banner-default-height">
                <div className="container">
                    <div className="row">
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content blog__banner">
                                <span className="starting__price">Blog &amp; Article </span>
                                <h1 className="banner-title">Latest News &amp; Articale</h1>
                                <p className="slogan">
                                    You can also do this by logging into a server directly, but the
                                    process requires some technical knowledge since a single mistake can
                                    break your entire site...
                                </p>
                                <div className="hosting-action">
                                    <Link
                                        href="blog-details"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image blog">
                                <img src="/assets/images/banner/banner__blog__image.svg" alt="" />
                                <img
                                    className="shape one left-right"
                                    src="/assets/images/banner/banner__blog__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape two show-hide"
                                    src="assets/images/banner/banner__blog__image-sm2.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogBanner