'use client'
import React, { useState } from "react";
import RoomCardFive from './RoomCardFive';
import posts from '../data/data-room.json';
import Link from 'next/link';


function RoomSeven() {
    const [isOpen, setIsOpen] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const postsPerLoad = 3;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <>
            {/* Single Rooms Section */}
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row g-30 main__content sticky-wrap">

                        {/* Left Side (Room Cards) */}
                        <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
                            <div className="row g-30">
                                {posts.slice(0, visiblePosts).map((data, index) => (
                                    <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                                        <RoomCardFive
                                            Slug={data.slug}
                                            Img={`${data.image}`}
                                            Title={data.title}
                                            Price={data.price}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visiblePosts < posts.length && (
                                <div className="load__more__link">
                                    <button onClick={handleLoadMore}>
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Right Side (Sticky Booking Form) */}
                        <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                            <div className="rts__booking__form has__background no__shadow sticky-item">
                                <form action="#" method="post" className="advance__search">
                                    <h5>Book Your Stay</h5>
                                    <div className="advance__search__wrapper">

                                        {/* Check-in Input */}
                                        <div className="query__input wow fadeInUp">
                                            <label htmlFor="check__in" className="query__label">Check In</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Check-out Input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                            <label htmlFor="check__out" className="query__label">Check Out</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__out" name="check__out" placeholder="15 May 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Adults Dropdown */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                            <label htmlFor="adult" className="query__label">Adult</label>
                                            <div className="query__input__position">
                                                <select name="adult" id="adult" className="form-select">
                                                    <option value={1}>1 Person</option>
                                                    <option value={2}>2 Person</option>
                                                    <option value={3}>3 Person</option>
                                                    <option value={4}>4 Person</option>
                                                    <option value={5}>5 Person</option>
                                                    <option value={6}>6 Person</option>
                                                    <option value={7}>7 Person</option>
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Children Dropdown */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="child" className="query__label">Child</label>
                                            <div className="query__input__position">
                                                <select name="child" id="child" className="form-select">
                                                    <option value={1}>1 Child</option>
                                                    <option value={2}>2 Child</option>
                                                    <option value={3}>3 Child</option>
                                                    <option value={4}>4 Child</option>
                                                    <option value={5}>5 Child</option>
                                                    <option value={6}>6 Child</option>
                                                    <option value={7}>7 Child</option>
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Search Button */}
                                        <button className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
                                            <span><i className="flaticon-search-1" /> Search</span>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Sticky Booking Form End */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomSeven;
