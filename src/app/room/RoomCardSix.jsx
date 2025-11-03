
import Link from 'next/link';
import React from 'react'

function RoomCardSix(props) {
    const {
        Slug,
        Img,
        Title,
        Price
    } = props;
    return (
        <>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link href={`/room/${Slug || "details"}`}>
                            <img
                                src={Img || "/assets/images/pages/room/1.webp"}
                                width={645}
                                height={438}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link href={`/room/${Slug || "details"}`} className="room__card__title h4">
                        {Title || "Deluxe Room"}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Size: 35 sqm
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Person: 5 Person
                        </span>
                    </div>
                    <p className="font-sm">
                        Our rooms offer a harmonious blend of comfort and elegance,
                        designed to provide an exceptional stay for every guest.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{Price || '120$'}</span>
                    </div>
                    <Link href={`/room/${Slug || "details"}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link href={`/room/${Slug || "details"}`}>
                            <img
                                src={Img || "/assets/images/pages/room/1.webp"}
                                width={645}
                                height={438}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link href={`/room/${Slug || "details"}`} className="room__card__title h4">
                        {Title || "Deluxe Room"}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Size: 35 sqm
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Person: 5 Person
                        </span>
                    </div>
                    <p className="font-sm">
                        Also known as a Classic Room or Single Room, this is the most
                        basic type of room, usually featuring essential amenities.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{Price || '120$'}</span>
                    </div>
                    <Link href={`/room/${Slug || "details"}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardSix