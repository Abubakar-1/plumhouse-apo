"use client";
import React, { useState, useEffect } from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import FooterOne from "../home-1/FooterOne";
import { useLazyGetBookingByPublicIdQuery } from "../../../features/api/publicApiSlice";
import {
  Search,
  Hash,
  BedDouble,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";

// A small, local component for displaying details consistently
const DetailRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start py-4 border-b border-gray-200">
    <Icon className="w-6 h-6 text-gray-500 mr-4 mt-1 flex-shrink-0" />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="font-semibold text-gray-800 text-lg">{value}</p>
    </div>
  </div>
);

function FindBookingPage() {
  const [bookingIdInput, setBookingIdInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 1. Use the lazy query hook. It returns a trigger function and the query state.
  const [triggerGetBooking, { data: booking, isLoading, isError, error }] =
    useLazyGetBookingByPublicIdQuery();

  // Effect to update the error message when the query fails
  useEffect(() => {
    if (isError && error) {
      setErrorMessage(
        error.data?.message || "Booking not found or an error occurred."
      );
    }
  }, [isError, error]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    if (!bookingIdInput.trim()) {
      setErrorMessage("Please enter a booking ID.");
      return;
    }
    // 2. Call the trigger function with the input value to start the API call.
    triggerGetBooking(bookingIdInput.trim());
  };

  return (
    <>
      <TopBar />
      <HeaderOne />

      {/* Main Content Area */}
      <div className="rts__section section__padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-40">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Find Your Reservation
                </span>
                <h2 className="content__title h2 lh-1">My Booking</h2>
              </div>

              {/* Search Form */}
              <div className="rts__booking__form has__background wow fadeInUp">
                <form onSubmit={handleFormSubmit} className="advance__search">
                  <div className="advance__search__wrapper">
                    <div className="query__input">
                      <label htmlFor="bookingId" className="query__label">
                        Booking ID
                      </label>
                      <div className="query__input__position">
                        <input
                          type="text"
                          id="bookingId"
                          name="bookingId"
                          placeholder="Enter your booking ID (e.g., clx...)"
                          value={bookingIdInput}
                          onChange={(e) => setBookingIdInput(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="theme-btn btn-style fill no-border search__btn"
                      disabled={isLoading}
                    >
                      <Search className="w-5 h-5 mr-2" />
                      <span>{isLoading ? "Searching..." : "Find Booking"}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Results Area */}
              <div className="mt-40">
                {isLoading && (
                  <div className="text-center">
                    <p>Searching for your booking...</p>
                  </div>
                )}

                {isError && (
                  <div className="text-center text-red-500 bg-red-50 p-4 rounded-md">
                    <p>{errorMessage}</p>
                  </div>
                )}

                {booking && (
                  <div className="rts__booking__form has__background wow fadeInUp">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center text-green-600 mb-4">
                        <CheckCircle className="w-8 h-8 mr-3" />
                        <h3 className="h5 m-0">Booking Found!</h3>
                      </div>
                      <DetailRow
                        icon={Hash}
                        label="Booking ID"
                        value={booking.bookingId}
                      />
                      <DetailRow
                        icon={BedDouble}
                        label="Room"
                        value={booking.room.name}
                      />
                      <DetailRow
                        icon={Calendar}
                        label="Check-in Date"
                        value={new Date(booking.checkIn).toLocaleString()}
                      />
                      <DetailRow
                        icon={Calendar}
                        label="Check-out Date"
                        value={new Date(booking.checkOut).toLocaleString()}
                      />
                      <DetailRow
                        icon={Users}
                        label="Guest Name"
                        value={booking.guestName}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </>
  );
}

export default FindBookingPage;
