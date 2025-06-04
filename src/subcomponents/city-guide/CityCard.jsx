import React from "react";

const CityCard = ({ image, text }) => {
  return (
    <div className="relative">
      <img src={image} alt={text} />
      <div
        className="absolute bottom-0 left-0 w-full h-[50px] rounded-b-[16px] flex items-center pl-3"
        style={{ backgroundColor: "#1E1F22" }}
      >
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default CityCard;
