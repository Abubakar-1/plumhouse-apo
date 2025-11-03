import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import WOW from 'wowjs'; // Import DatePicker styles

function AdvanceForm() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="rts__section advance__search__section is__home__one">
            <div className="container">
                <div className="row">
                    <form action="#" method="post" className="advance__search">
                        <div className="advance__search__wrapper wow fadeInUp">
                            {/* Check In Date */}
                            <div className="query__input">
                                <label htmlFor="check__in" className="query__label">
                                    Check In
                                </label>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date) => setCheckInDate(date)}
                                    placeholderText="Select Date"
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            {/* Check Out Date */}
                            <div className="query__input">
                                <label htmlFor="check__out" className="query__label">
                                    Check Out
                                </label>
                                <DatePicker
                                    selected={checkOutDate}
                                    onChange={(date) => setCheckOutDate(date)}
                                    placeholderText="Select Date"
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            {/* Adult Selection */}
                            <div className="query__input">
                                <label htmlFor="adult" className="query__label">Adult</label>
                                <select name="adult" id="adult" className="form-select">
                                    {[...Array(9)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1} Person</option>
                                    ))}
                                </select>
                                <div className="query__input__icon">
                                    <i className="flaticon-user" />
                                </div>
                            </div>
                            {/* Child Selection */}
                            <div className="query__input">
                                <label htmlFor="child" className="query__label">Child</label>
                                <select name="child" id="child" className="form-select">
                                    {[...Array(9)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1} Child</option>
                                    ))}
                                </select>
                                <div className="query__input__icon">
                                    <i className="flaticon-user" />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button className="theme-btn btn-style fill no-border search__btn" type="submit">
                                <span>Check Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdvanceForm;