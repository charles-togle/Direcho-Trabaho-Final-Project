import React from "react";

import left_icon from "@/assets/icons/left_icon.png";
import right_icon from "@/assets/icons/right_icon.png";

const SeeAllNavigation = ({ onLeftClick, onRightClick, showSeeAll = true }) => {
  return (
    <div className="flex items-center gap-2">
      {showSeeAll && (
        <button className="text-white px-4 hover:underline font-bold">
          See All
        </button>
      )}

      <button
        onClick={onLeftClick}
        className="bg-base-shade rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center"
      >
        <img src={left_icon} alt="left arrow" className="w-16px h-7.47px" />
      </button>

      <button
        onClick={onRightClick}
        className="bg-base-shade rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center"
      >
        <img src={right_icon} alt="right arrow" className="w-16px h-7.47px" />
      </button>
    </div>
  );
};

export default React.memo(SeeAllNavigation);
