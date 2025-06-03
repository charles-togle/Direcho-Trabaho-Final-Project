import React from "react";
import Vector from "../../assets/images/performance-spotlights/Vector.png";

const SpotlightCardContent = ({ data }) => {
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${data.image})` }}
          className="spotlight__content__container"
        >
          <div className="spotlight__content">
            <div className="spotlight__content__image">
              <img src={Vector} alt="Vector" />
            </div>
          </div>
          <h2>{data.title}</h2>
        </div>
      ))}
    </>
  );
};

export default SpotlightCardContent;
