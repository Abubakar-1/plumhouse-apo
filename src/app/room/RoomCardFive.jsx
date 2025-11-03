import Link from 'next/link';
import React from 'react'

function RoomCardFive(props) {
    const {
        Slug,
        Img,
        Title,
        Price
    } = props;
    return (
        <>
            <div className="room__card">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link href={`/room2/${Slug || "details"}`}>
                            <img
                                src={Img || "/assets/images/pages/room/1.webp"}
                                width={420}
                                height={310}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link href={`/room2/${Slug || "details"}`} className="room__card__title h5" >
                        {Title || "Deluxe Room"}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            35 sqm
                        </span>
                        <span>
                            <i className="flaticon-user" />5 Person
                        </span>
                    </div>
                    <div className="room__price__tag">
                        <span className="h6 d-block">{Price || '120$'}</span>
                    </div>
                    <Link href={`/room2/${Slug || "details"}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardFive