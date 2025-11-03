import Link from 'next/link'
import React from 'react'

function OfferOne() {
    return (
        <>
            {/* special section start */}
            <div className="rts__section offer__area is__home__one has__shape">
                <div className="container">
                    <div className="row position-relative justify-content-center text-center mb-30">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">
                                    Special Offer
                                </span>
                                <h2 className="section__title">Special Offer</h2>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row justify-content-center g-30">
                        <div className="col-lg-10 col-xl-6 col-xxl-5">
                            <div className="single__offer__card">
                                <Link href="#">
                                    <img src="/assets/images/offer/5.webp" alt="" />
                                </Link>
                                <div className="single__offer__card__content">
                                    <Link href="#" className="h4">
                                        Family Fun Package
                                    </Link>
                                    <ul className="offer__included list-unstyled">
                                        <li>
                                            <i className="flaticon-check-circle" /> 15% off on family
                                            suites
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Free meals for kids
                                            under 12
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Complimentary tickets
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> The local amusement
                                            park
                                        </li>
                                    </ul>
                                    <h3 className="offer__price mb-0">$39.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-xl-6 col-xxl-7">
                            <div className="d-flex flex-column gap-30">
                                <div className="single__offer__card is__flex">
                                    <Link href="#">
                                        <img
                                            src="/assets/images/offer/6.webp"
                                            width={265}
                                            height={310}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="single__offer__card__content">
                                        <Link href="#" className="h5">
                                            Spa Retreat
                                        </Link>
                                        <ul className="offer__included list-unstyled">
                                            <li>
                                                <i className="flaticon-check-circle" /> A two-night stay in
                                                a room
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Daily spa treatments
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Healthy breakfast
                                                and lunch
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Access to all spa{" "}
                                            </li>
                                        </ul>
                                        <h4 className="offer__price mb-0">$39.00</h4>
                                    </div>
                                </div>
                                <div className="single__offer__card is__flex">
                                    <Link href="#">
                                        <img
                                            src="/assets/images/offer/7.webp"
                                            width={265}
                                            height={310}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="single__offer__card__content">
                                        <Link href="#" className="h5">
                                            Romantic Getaway
                                        </Link>
                                        <ul className="offer__included list-unstyled">
                                            <li>
                                                <i className="flaticon-check-circle" /> A two-night stay in
                                                a room
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Daily spa treatments
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Healthy breakfast
                                                and lunch
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Access to all spa{" "}
                                            </li>
                                            <h4 className="offer__price mb-0">$39.00</h4>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* special section end */}
        </>

    )
}

export default OfferOne