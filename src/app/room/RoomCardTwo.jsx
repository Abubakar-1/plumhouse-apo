'use client'
import Link from 'next/link';
import React from 'react'

function RoomCardTwo(props) {
    const {
        Slug,
        Img,
        Title,
        Price
    } = props;
    return (
        <>
            <div className="room__slider__box">
                <div className="room__slider__thumb">
                    <Link href="#" className="link__item">
                        <figure>
                            <img src={Img || "/assets/images/pages/room/1.webp"} alt="" />
                        </figure>
                    </Link>
                </div>
                <div className="room__slide__content">
                    <div className="slider__meta">
                        <Link href={`/room/${Slug || "details"}`} className="room__title">
                            <h5>{Title || "Timberline Hideaway Hotel"}</h5>
                        </Link>
                        <div className="room__content__meta">
                            <span>
                                <i className="flaticon-construction" />
                                Size: 35 sqm
                            </span>
                            <span>
                                <i className="flaticon-user" />
                                Person: 5 Person
                            </span>
                        </div>
                    </div>
                    <span className="price h4">{Price || '200$'}</span>
                </div>
            </div>
        </>
    )
}

export default RoomCardTwo