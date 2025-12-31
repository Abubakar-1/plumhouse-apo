"use client";
import React from "react";
import TopBar from "../../home-1/TopBar";
import HeaderOne from "../../home-1/Header";
import FooterOne from "../../home-1/FooterOne";
import Link from "next/link";
import { CheckCircle } from "lucide-react"; // `npm install lucide-react` if not already installed

function PaymentSuccessPage() {
  return (
    <>
      <TopBar />
      <HeaderOne />

      {/* Main Content Area */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="text-center"
                style={{
                  minHeight: "40vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckCircle
                  className="text-green-500"
                  size={80}
                  strokeWidth={1.5}
                />
                <h2 className="content__title h2 lh-1 mt-40">
                  Payment Successful!
                </h2>
                <p
                  className="mt-20"
                  style={{ maxWidth: "600px", margin: "20px auto" }}
                >
                  Thank you for your payment. Your booking has been confirmed. A
                  confirmation email with your booking details will be sent to
                  you shortly. Please check your inbox.
                </p>
                <div className="mt-40">
                  <Link href="/" className="theme-btn btn-style fill no-border">
                    <span>Return to Homepage</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </>
  );
}

export default PaymentSuccessPage;
