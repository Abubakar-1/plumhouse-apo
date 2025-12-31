"use client";
import React from "react";
import TopBar from "../../home-1/TopBar";
import HeaderOne from "../../home-1/Header";
import FooterOne from "../../home-1/FooterOne";
import Link from "next/link";
import { XCircle } from "lucide-react";

function PaymentErrorPage() {
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
                <XCircle className="text-red-500" size={80} strokeWidth={1.5} />
                <h2 className="content__title h2 lh-1 mt-40">Payment Failed</h2>
                <p
                  className="mt-20"
                  style={{ maxWidth: "600px", margin: "20px auto" }}
                >
                  Unfortunately, there was an issue processing your payment, or
                  the transaction was cancelled. No charges were made. Please
                  try booking your room again.
                </p>
                <div className="mt-40">
                  <Link
                    href="/rooms" // Link back to the rooms list
                    className="theme-btn btn-style fill no-border"
                  >
                    <span>View Rooms & Try Again</span>
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

export default PaymentErrorPage;
