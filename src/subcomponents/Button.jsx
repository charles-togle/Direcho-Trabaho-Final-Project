import React from "react";
import "../styles/button.css";

const Button = ({ buttonText }) => {
  return (
    <div className="card-btn-wrapper">
      <button className="card-btn">{buttonText}</button>
    </div>
  );
};

export default React.memo(Button);
