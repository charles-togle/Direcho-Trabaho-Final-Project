import React from "react";

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-10 h-10 border-4 border-t-white border-gray-300 rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-sm">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
