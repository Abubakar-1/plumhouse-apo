import Link from 'next/link';
import React from 'react'

function RoomCardFour(props) {
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
                        <Link href={`/room/${Slug || "details"}`}>
                            <img
                                src={Img || "/assets/images/pages/room/1.webp"}
                                width={420}
                                height={310}
                                alt="room card"
                            />
                        </Link>
                    </div>
                    <div className="room__price__tag">
                        <span className="h6 d-block">{Price || '120$'}</span>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link href={`/room/${Slug || "details"}`} className="room__card__title h5">
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
                    <p className="font-sm">
                        Our rooms offer a harmonious blend of comfort and elegance,
                        designed to provide an exceptional stay for every guest.
                    </p>
                    <Link href={`/room/${Slug || "details"}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardFour