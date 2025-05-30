import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto w-10/12 md:max-w-xl lg:max-w-[1550px]">
      {children}
    </div>
  );
};

export default Container;
