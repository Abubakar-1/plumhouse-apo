import React from "react";

const LoginForm = ({ isOpen, onClose, onSignupOpen }) => {
    return (
        <div className={`modal-overlay ${isOpen ? "d-block" : "d-none"}`}>
            <div className={`modal similar__modal fade ${isOpen ? "show" : ""}`} style={{ display: isOpen ? "block" : "none" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="max-content similar__form form__padding">
                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                <h6 className="mb-0">Login To Moonlit</h6>
                                <button className="btn-close" type="button" onClick={onClose}></button>
                            </div>
                            <form action="#" method="post" className="d-flex flex-column gap-3">
                                <div className="form-group">
                                    <label htmlFor="email-popup" className="text-dark mb-3">
                                        Your Email
                                    </label>
                                    <div className="position-relative">
                                        <input type="email" id="email-popup" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-dark mb-3">
                                        Password
                                    </label>
                                    <div className="position-relative">
                                        <input type="password" id="password" placeholder="Enter your password" required />
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input className="form-check-input mt-0" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label mb-0" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                    <button className="forgot__password text-para" type="button">
                                        Forgot Password?
                                    </button>
                                </div>
                                <div className="form-group my-3">
                                    <button className="theme-btn btn-style sm-btn fill w-100">
                                        <span>Login</span>
                                    </button>
                                </div>
                            </form>
                            <div className="d-block has__line text-center">
                                <p>Or</p>
                            </div>
                            <div className="d-flex gap-4 flex-wrap justify-content-center mt-20 mb-20">
                                <button className="theme-btn btn-style sm-btn google">
                                    <span>Continue with Google</span>
                                </button>
                                <button className="theme-btn btn-style sm-btn facebook">
                                    <span>Continue with Facebook</span>
                                </button>
                            </div>
                            <span className="d-block text-center">
                                Don’t have an account?{" "}
                                <button onClick={onSignupOpen} className="text-primary border-0 bg-transparent">
                                    Sign Up
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
