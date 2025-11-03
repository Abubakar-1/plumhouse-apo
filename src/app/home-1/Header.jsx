"use client";
import React, { useState, useEffect } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import Link from "next/link";
import LoginForm from "../form/LoginForm";
import SignUpForm from "../form/SignUpForm";

function HeaderOne() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    setHydrated(true);

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* header menu */}
      <header
        className={`main__header header__function ${
          hydrated && isSticky ? "is__sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="main__header__wrapper">
              <div className="main__nav">
                <div className="navigation d-none d-lg-block">
                  <nav className="navigation__menu" id="main__menu">
                    <ul className="list-unstyled">
                      <li className="navigation__menu--item">
                        <Link href="/" className="navigation__menu--item__link">
                          Home
                        </Link>
                      </li>
                      <li className="navigation__menu--item">
                        <Link
                          href="/room"
                          className="navigation__menu--item__link"
                        >
                          Rooms
                        </Link>
                      </li>
                      <li className="navigation__menu--item">
                        <Link href="/" className="navigation__menu--item__link">
                          About
                        </Link>
                      </li>

                      <li className="navigation__menu--item">
                        <Link
                          href="/contact"
                          className="navigation__menu--item__link"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="main__logo">
                <Link href="/">
                  <img
                    className="logo__class"
                    src="/assets/images/logo/logo.svg"
                    alt="plumhouse"
                  />
                </Link>
              </div>
              <div className="main__right">
                {/* Book Now Button */}
                <Link
                  href="/room/the-ritz-carlton"
                  className="theme-btn btn-style sm-btn fill"
                >
                  <span>Book Now</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                  onClick={() => setIsOffcanvasOpen(true)}
                >
                  <span>
                    <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />

      {/* header menu end */}
    </>
  );
}

export default HeaderOne;
