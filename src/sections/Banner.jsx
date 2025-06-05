import React from "react";
import Button from "../subcomponents/Button";
// CSS
import "../styles/banner/banner.css";

const Banner = () => {
  return (
    <div className="banner-bg banner__container">
      <h1>Win tickets, merch and more. Sign up today!</h1>
      <p>Stay up-to-date with the latest events in your city.</p>
      <Button buttonText="Get Started" />
    </div>
  );
};

export default Banner;
