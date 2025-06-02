import React from "react";
import Button from "../subcomponents/Button";

const Banner = () => {
  return (
    <div className="banner-bg h-[75vh] flex flex-col justify-center text-white text-center items-center gap-10 my-10">
      <h1 className="text-5xl leading-14 w-1/3 font-bold">
        Win tickets, merch and more. Sign up today!
      </h1>
      <p className="font semi-bold text-2xl">
        Stay up-to-date with the latest events in your city.
      </p>
      <Button buttonText="Get Started" />
    </div>
  );
};

export default Banner;
