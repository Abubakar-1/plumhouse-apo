import Link from "next/link";
import React from "react";

function RoomCardOne(props) {
  const { Slug, Img, Title, Price } = props;
  console.log(Slug);
  return (
    <div className="room__slide__box radius-6">
      <div className="room__thumbnail jara-mask-2 jarallax">
        <img
          height={585}
          width={420}
          className="radius-6 jarallax-img"
          src={
            Img
              ? Img.replace("/upload/", "/upload/f_auto,q_auto/")
              : "/assets/images/pages/room/1.webp"
          }
          alt=""
        />
      </div>
      <div className="room__content">
        <Link href={`/room/${Slug || "details"}`} className="room__title">
          <h5>{Title || "The Ritz-Carlton"}</h5>
        </Link>
        <div className="room__content__meta">
          <span>
            <i className="flaticon-construction" /> 35 sqm
          </span>
          <span>
            <i className="flaticon-user" />2 Person
          </span>
        </div>
        <span className="h4 rent mb-0 mt-15 d-block">{Price || "120$"}</span>
      </div>
    </div>
  );
}

export default RoomCardOne;
