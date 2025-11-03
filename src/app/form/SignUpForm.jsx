import Link from 'next/link'
import React from 'react'

const SignUpForm = ({ isOpen, onClose, onSignupOpen }) => {
    return (
        <div className={`modal-overlay ${isOpen ? "d-block" : "d-none"}`}>
            <div className={`modal similar__modal fade ${isOpen ? "show" : ""}`} style={{ display: isOpen ? "block" : "none" }} id="signupModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="max-content similar__form form__padding">
                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                <h6 className="mb-0">Create A Free Account</h6>
                                <button className="btn-close" type="button" onClick={onClose}></button>
                            </div>
                            <form action="#" className="d-flex flex-column gap-3">
                                <div className="form-group">
                                    <label htmlFor="sname" className=" text-dark mb-3">
                                        Your Name
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="text"
                                            name="sname"
                                            id="sname"
                                            placeholder="Candidate"
                                            required=""
                                        />
                                        <i className="fa-light fa-user icon" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signemail" className=" text-dark mb-3">
                                        Your Email
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="email"
                                            name="signemail"
                                            id="signemail"
                                            placeholder="Enter your email"
                                            required=""
                                        />
                                        <i className="fa-sharp fa-light fa-envelope icon" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="spassword" className=" text-dark mb-3">
                                        Password
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="password"
                                            name="spassword"
                                            id="spassword"
                                            placeholder="Enter your password"
                                            required=""
                                        />
                                        <i className="fa-light fa-lock icon" />
                                    </div>
                                </div>
                                <div className="form-group my-3">
                                    <button className="theme-btn btn-style sm-btn fill w-100">
                                        <span>Register</span>
                                    </button>
                                </div>
                            </form>
                            <div className="d-block has__line text-center">
                                <p>Or</p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center gap-4 mt-20 mb-20">
                                <div className="is__social google">
                                    <button className="theme-btn btn-style sm-btn">
                                        <span>Continue with Google</span>
                                    </button>
                                </div>
                                <div className="is__social facebook">
                                    <button className="theme-btn btn-style sm-btn">
                                        <span>Continue with Facebook</span>
                                    </button>
                                </div>
                            </div>
                            <span className="d-block text-center ">
                                Have an account?{" "}
                                <Link
                                    href="#"
                                    data-bs-target="#loginModal"
                                    data-bs-toggle="modal"
                                    className="text-primary"
                                >
                                    Login
                                </Link>{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm