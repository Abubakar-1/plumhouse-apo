import Link from "next/link";
import React, { useState } from "react";

function OffcanvasMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);

  // Toggle the active state of a dropdown menu
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="rts__btstrp__offcanvase">
        <div className="offcanvase__wrapper">
          {/* Left Side - Mobile Menu */}
          <div className="left__side mobile__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <div className="offcanvase__top">
              <div className="offcanvase__logo">
                <Link href="/">
                  <img src="/assets/images/logo/logo__two.svg" alt="logo" />
                </Link>
              </div>
              <p className="description">
                Welcome to PlumHouse Apo, where luxury meets comfort in the
                heart of Abuja. Since 1999, we have been dedicated to providing.
              </p>
            </div>
            <div className="offcanvase__mobile__menu">
              <div className="mobile__menu__active">
                <nav className="mobile__menu__nav">
                  <ul className="list-unstyled">
                    {/* Home Menu */}
                    <li className="slide">
                      <Link className="slide__menu__item" href="/about">
                        Home
                      </Link>
                    </li>
                    {/* About Us */}
                    <li className="slide">
                      <Link className="slide__menu__item" href="/about">
                        About us
                      </Link>
                    </li>

                    {/* Rooms Menu */}
                    <li className="slide">
                      <Link className="slide__menu__item" href="/about">
                        Rooms
                      </Link>
                    </li>

                    {/* Contact Us */}
                    <li className="slide">
                      <Link className="slide__menu__item" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvase__bottom">
              <div className="offcanvase__address">
                <div className="item">
                  <span className="h6">Phone</span>
                  <Link href="tel:+1234567890">
                    <i className="flaticon-phone-flip" /> +234907738383
                  </Link>
                </div>
                <div className="item">
                  <span className="h6">Email</span>
                  <Link href="mailto:info@hostie.com">
                    <i className="flaticon-envelope" />
                    plumhouseapo@gmail.com
                  </Link>
                </div>
                <div className="item">
                  <span className="h6">Address</span>
                  <Link href="#">
                    <i className="flaticon-marker" /> Plum House Apo, Apo,
                    Abuja, Nigeria
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop Menu */}
          <div className="right__side desktop__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <div className="rts__desktop__menu">
              <nav className="desktop__menu offcanvas__menu">
                <ul className="list-unstyled">
                  {/* Home Menu */}
                  <li
                    className={`slide has__children ${
                      activeMenu === 1 ? "active" : ""
                    }`}
                  >
                    <Link
                      className="slide__menu__item"
                      href="#"
                      onClick={() => toggleMenu(1)}
                    >
                      Home
                      <span className="toggle" />
                    </Link>
                    <ul
                      className="slide__menu"
                      style={{ display: activeMenu === 1 ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/">Luxury Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-2">Luxe Vista Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-3">Ocean Breeze Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-4">Apartment Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-5">Mountain Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-6">City Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-7">Beach Hotel</Link>
                      </li>
                      <li>
                        <Link href="/home-dark">Hotel Dark</Link>
                      </li>
                      <li>
                        <Link href="/home-video">Hotel Seaside</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Other Menu Items for Desktop */}
                  <li className="slide">
                    <Link className="slide__menu__item" href="/about">
                      About us
                    </Link>
                  </li>
                  <li
                    className={`slide has__children ${
                      activeMenu === 2 ? "active" : ""
                    }`}
                  >
                    <Link
                      className="slide__menu__item"
                      href="#"
                      onClick={() => toggleMenu(2)}
                    >
                      Rooms
                      <span className="toggle" />
                    </Link>
                    <ul
                      className="slide__menu"
                      style={{ display: activeMenu === 2 ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/room-one">Room One</Link>
                      </li>
                      <li>
                        <Link href="/room-two">Room Two</Link>
                      </li>
                      <li>
                        <Link href="/room-three">Room Three</Link>
                      </li>
                      <li>
                        <Link href="/room-four">Room Four</Link>
                      </li>
                      <li>
                        <Link href="/room-details-1">Room Details One</Link>
                      </li>
                      <li>
                        <Link href="/room-details-2">Room Details Two</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`slide has__children ${
                      activeMenu === 3 ? "active" : ""
                    }`}
                  >
                    <Link
                      className="slide__menu__item"
                      href="#"
                      onClick={() => toggleMenu(3)}
                    >
                      Blog
                      <span className="toggle" />
                    </Link>
                    <ul
                      className="slide__menu"
                      style={{ display: activeMenu === 3 ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog/Live-Elegantly-in-Our-Contemporary-Suite-for-Apartment">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`slide has__children ${
                      activeMenu === 4 ? "active" : ""
                    }`}
                  >
                    <Link
                      className="slide__menu__item"
                      href="#"
                      onClick={() => toggleMenu(4)}
                    >
                      Pages
                      <span className="toggle" />
                    </Link>
                    <ul
                      className="slide__menu"
                      style={{ display: activeMenu === 4 ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/restaurant">Restaurant</Link>
                      </li>
                      <li>
                        <Link href="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/service">Service</Link>
                      </li>
                      <li>
                        <Link href="/event">Event</Link>
                      </li>
                      <li>
                        <Link href="/activities">Activities</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="slide">
                    <Link className="slide__menu__item" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffcanvasMenu;
