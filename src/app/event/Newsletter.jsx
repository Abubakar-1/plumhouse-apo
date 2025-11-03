import Link from 'next/link'
import React from 'react'

function NewsletterThree() {
    return (
        <>
            {/* event newsletter */}
            <div className="rts__section event__newsletter__bg">
                <div className="container">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="event__newsletter__text">
                                <h2 className="mb-0">
                                    We're Here to Help Reach Out to Us Today And Join Our Event
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event__newsletter__contact">
                                <div className="contact__method">
                                    <span className="h6">Reservation By Phone</span>
                                    <Link href="callto:121">
                                        <i className="flaticon-phone-flip" />
                                        +12505550199
                                    </Link>
                                </div>
                                <div className="contact__method">
                                    <span className="h6">Reservation By Email</span>
                                    <Link href="mailto:example@example.com">
                                        <img src="/assets/images/icon/mail.svg" alt="" />
                                        moonlit@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* event newsletter end */}
        </>

    )
}

export default NewsletterThree