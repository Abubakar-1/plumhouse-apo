import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="social__links">
                <Link className="link__item gap-10" href="callto:#">
                  <i className="flaticon-phone-flip" /> +2348056881770
                </Link>
                <Link className="link__item gap-10" href="mailto:#">
                  <i className="flaticon-envelope" /> plumhouseapo@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="location">
                <Link className="link__item gap-10" href="/">
                  <i className="flaticon-marker" />
                  Plum House Apo, Apo, Abuja, Nigeria.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
