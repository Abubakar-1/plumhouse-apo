import Link from 'next/link';
import React from 'react'

function RoomCardThree(props) {
    const {
        Slug,
        Img,
        Title,
        Price
    } = props;
    return (
        <>
            <div className="apartment__slide__box">
                <div className="apartment__slide__image">
                    <img
                        height={500}
                        width={610}
                        src={Img || "/assets/images/pages/room/1.webp"}
                        alt="apartment"
                    />
                </div>
                <div className="apartment__slide__content">
                    <div className="slider__meta">
                        <Link href={`/room/${Slug || "details"}`} className="apartment__title">
                            <h5>{Title || "Timberline Hideaway Hotel"}</h5>
                        </Link>
                        <div className="apartment__content__meta">
                            <span>
                                <i className="flaticon-construction" />
                                35 sqm
                            </span>
                            <span>
                                <i className="flaticon-user" />5 Person
                            </span>
                        </div>
                    </div>
                    <span className="price h4">{Price || '200$'}</span>
                </div>
            </div>
        </>
    )
}

export default RoomCardThree