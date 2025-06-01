import React from "react";

const SeeAllNavigation = ({
  title,
  onLeftClick,
  onRightClick,
  LeftIcon,
  RightIcon,
  showSeeAll = true,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex items-center gap-2">
        {showSeeAll && (
          <button className="text-blue-500 text-sm hover:underline ml-2">
            See All
          </button>
        )}

        <button
          onClick={onLeftClick}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          {LeftIcon && <LeftIcon className="w-5 h-5" />}
        </button>

        <button
          onClick={onRightClick}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          {RightIcon && <RightIcon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default React.memo(SeeAllNavigation);
