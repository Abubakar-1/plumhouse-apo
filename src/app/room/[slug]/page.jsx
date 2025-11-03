"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import TopBar from "../../home-1/TopBar";
import HeaderOne from "../../home-1/Header";
import FooterOne from "../../home-1/FooterOne";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useCreateBookingMutation,
  useGetPublicRoomByIdQuery,
  useLazyGetRoomAvailabilityQuery,
} from "../../../../features/api/publicApiSlice";

// Helper data structure for rendering amenities dynamically.
const amenityDetails = [
  { key: "freeWifi", label: "Free Wifi", icon: "/assets/images/icon/wifi.svg" },
  { key: "shower", label: "Shower", icon: "/assets/images/icon/shower.svg" },
  {
    key: "airportTransport",
    label: "Airport transport",
    icon: "/assets/images/icon/aeroplane.svg",
  },
  { key: "balcony", label: "Balcony", icon: "/assets/images/icon/balcony.svg" },
  {
    key: "refrigerator",
    label: "Refrigerator",
    icon: "/assets/images/icon/refrigerator.svg",
  },
  {
    key: "support24_7",
    label: "24/7 Support",
    icon: "/assets/images/icon/support.svg",
  },
  { key: "workDesk", label: "Work Desk", icon: "/assets/images/icon/desk.svg" },
  {
    key: "fitnessCenter",
    label: "Fitness Center",
    icon: "/assets/images/icon/fitness.svg",
  },
  {
    key: "swimmingPool",
    label: "Swimming Pool",
    icon: "/assets/images/icon/swimming-pool.svg",
  },
];

function RoomDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const roomId = parseInt(slug, 10);
  const skip = isNaN(roomId);

  // --- API HOOKS ---
  const {
    data: room,
    isLoading,
    isError,
  } = useGetPublicRoomByIdQuery(roomId, { skip });
  const [triggerGetAvailability, { data: availabilityData }] =
    useLazyGetRoomAvailabilityQuery();
  const [createBooking, { isLoading: isBooking }] = useCreateBookingMutation();

  // --- FORM STATE ---
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0); // Kept for potential future use
  const [totalPrice, setTotalPrice] = useState(0);
  const [formError, setFormError] = useState("");

  // Fetch room availability once the room data is loaded
  useEffect(() => {
    if (room) {
      triggerGetAvailability(room.id);
    }
  }, [room, triggerGetAvailability]);

  // Calculate the total price whenever the dates change
  useEffect(() => {
    if (checkInDate && checkOutDate && room) {
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (nights > 0) {
        setTotalPrice(nights * room.price);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [checkInDate, checkOutDate, room]);

  // Handle the booking form submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!checkInDate || !checkOutDate) {
      setFormError("Please select both check-in and check-out dates.");
      return;
    }

    // In a real app, you'd get these from a modal or separate form fields
    const guestDetails = {
      guestName: "Guest User",
      guestEmail: "guest@example.com",
      guestPhone: "1234567890",
    };

    const bookingPayload = {
      roomId: room.id,
      ...guestDetails,
      checkIn: checkInDate.toISOString(),
      checkOut: checkOutDate.toISOString(),
      adults: parseInt(adults, 10),
      children: parseInt(children, 10),
    };

    try {
      const result = await createBooking(bookingPayload).unwrap();
      alert(`Booking successful! Your Booking ID is: ${result.data.bookingId}`);
      router.push("/"); // Redirect to homepage on success
    } catch (err) {
      console.error("Failed to create booking:", err);
      setFormError(
        err.data?.message ||
          "Booking failed. The selected dates might no longer be available."
      );
    }
  };

  if (isLoading || skip) {
    return (
      <>
        <TopBar />
        <HeaderOne />
        <div className="rts__section section__padding">
          <div className="container">
            <p>Loading room details...</p>
          </div>
        </div>
        <FooterOne />
      </>
    );
  }

  if (isError || !room) {
    return (
      <>
        <TopBar />
        <HeaderOne />
        <div className="rts__section section__padding">
          <div className="container">
            <p>Room not found!</p>
          </div>
        </div>
        <FooterOne />
      </>
    );
  }

  const primaryImage = room.images.find((img) => img.isPrimary);
  const galleryImages = room.images.filter((img) => !img.isPrimary);

  // Prepare booked dates to be disabled in the calendar
  const excludedDates =
    availabilityData?.map((range) => ({
      start: new Date(range.checkIn),
      end: new Date(range.checkOut),
    })) || [];

  return (
    <>
      <TopBar />
      <HeaderOne />
      {/* room details area */}
      <div className="rts__section single page__hero__height page__hero__bg no__shadow">
        <img
          src={
            primaryImage?.url
              ? primaryImage.url.replace("/upload/", "/upload/f_auto,q_auto/")
              : "/assets/images/placeholder-banner.jpg"
          }
          alt="Room Banner"
        />
      </div>
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-xxl-8 col-xl-7">
              <div className="room__details">
                <span className="h4 price">${room.price.toFixed(2)}</span>
                <h2 className="room__title">{room.name}</h2>
                <div className="room__meta">
                  <span>
                    <i className="flaticon-construction" />
                    {room.size} sqm
                  </span>
                  <span>
                    <i className="flaticon-user" />
                    {room.capacity} Person
                  </span>
                </div>
                <p>{room.description}</p>
                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  {galleryImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="room__image__item">
                      <img
                        className="rounded-2"
                        src={
                          image?.url
                            ? image.url.replace(
                                "/upload/",
                                "/upload/f_auto,q_auto/"
                              )
                            : "/assets/images/placeholder-gallery.jpg"
                        }
                        alt={`Gallery image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <span className="h4 d-block mb-30">Room Amenities</span>
                <div className="room__amenity mb-50">
                  {amenityDetails.map(
                    (amenity, index) =>
                      index % 3 === 0 && (
                        <div key={`group-${index}`} className="group__row">
                          {amenityDetails.slice(index, index + 3).map(
                            (item) =>
                              room[item.key] && (
                                <div key={item.key} className="single__item">
                                  <img
                                    src={item.icon}
                                    height={30}
                                    width={36}
                                    alt={item.label}
                                  />
                                  <span>{item.label}</span>
                                </div>
                              )
                          )}
                        </div>
                      )
                  )}
                </div>
                <span className="h4 d-block mb-50">Room Features</span>
                <div className="room__feature mb-30">
                  <div className="group__row">
                    <ul className="list__item">
                      {room.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>
                  Our elegantly appointed rooms and suites are designed to offer
                  the utmost in comfort and style.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 sticky-item">
              <div className="rts__booking__form has__background is__room__details sticky-item">
                <form
                  onSubmit={handleBookingSubmit}
                  className="advance__search"
                >
                  <h5 className="pt-0">Book Your Stay</h5>
                  <div className="advance__search__wrapper">
                    {/* single input */}
                    <div className="query__input wow fadeInUp">
                      <label className="query__label">Check In</label>
                      <div className="query__input__position">
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          selectsStart
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={new Date()}
                          excludeDateIntervals={excludedDates}
                          placeholderText="Select Check-in"
                          className="custom-datepicker"
                          required
                        />
                        <div className="query__input__icon">
                          <i className="flaticon-calendar" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* single input */}
                    <div
                      className="query__input wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <label className="query__label">Check Out</label>
                      <div className="query__input__position">
                        <DatePicker
                          selected={checkOutDate}
                          onChange={(date) => setCheckOutDate(date)}
                          selectsEnd
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={checkInDate || new Date()}
                          excludeDateIntervals={excludedDates}
                          placeholderText="Select Check-out"
                          className="custom-datepicker"
                          required
                        />
                        <div className="query__input__icon">
                          <i className="flaticon-calendar" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* single input */}
                    <div
                      className="query__input wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <label htmlFor="adult" className="query__label">
                        Persons
                      </label>
                      <div className="query__input__position">
                        <select
                          name="adult"
                          id="adult"
                          className="form-select"
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                        >
                          {Array.from(
                            { length: room.capacity },
                            (_, i) => i + 1
                          ).map((p) => (
                            <option key={p} value={p}>
                              {p} Person(s)
                            </option>
                          ))}
                        </select>
                        <div className="query__input__icon">
                          <i className="flaticon-user" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* <div className="query__input wow fadeInUp" data-wow-delay=".5s">...child...</div> */}
                    {/* single input */}
                    <div
                      className="query__input wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <label htmlFor="room" className="query__label">
                        Room
                      </label>
                      <div className="query__input__position">
                        <select name="room" id="room" className="form-select">
                          <option value={1}>1 Room</option>
                        </select>
                        <div className="query__input__icon is__svg">
                          <img src="/assets/images/icon/room.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* <div className="query__input wow fadeInUp" data-wow-delay=".5s">...extra bed...</div> */}
                    {/* <h5 className="p-0 mt-20">Extra Services</h5> */}
                    {/* ...extra services checkboxes... */}
                    {/* calculation */}
                    <div className="total__price">
                      <span className="total h6 mb-0">Total Price</span>
                      <span className="price h6 m-0">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    {/* calculation end */}
                    {formError && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                      >
                        {formError}
                      </p>
                    )}
                    {/* submit button */}
                    <button
                      type="submit"
                      className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                      data-wow-delay=".6s"
                      disabled={isBooking}
                    >
                      <span>{isBooking ? "Booking..." : "Book Your Room"}</span>
                    </button>
                    {/* submit button end */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* room details area end */}
      <FooterOne />
    </>
  );
}

export default RoomDetailsPage;
