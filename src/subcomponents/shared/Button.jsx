import React from "react";

const ButtonComponent = {
  bgGradient:
    "text-white bg-[linear-gradient(to_right,_rgba(194,32,38,1),_rgba(196,0,203,1))] cursor-pointer",
  bgGray: "text-white bg-[#111111] cursor-pointer",
};

const Button = ({
  className = "",
  children,
  onClick,
  id,
  variant = "bgGray",
}) => {
  const variantStyle = ButtonComponent[variant] || "";

  return (
    <>
      <button
        className={`${className} ${variantStyle}`}
        onClick={onClick}
        id={id}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
