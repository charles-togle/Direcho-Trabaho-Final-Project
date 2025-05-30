import React from "react";

import LatestNewsImage1 from "@/assets/images/latest-news/latest_news_1.png";
import LatestNewsImage2 from "@/assets/images/latest-news/latest_news_2.png";

function NewsCard({ image, title, description, date }) {
  return (
    <div className="flex bg-[#1E1F22] text-white rounded-[16px] w-[588px] h-[282px]">
      <img src={image} alt={title} className="w-[251px] h-[251px] m-3.5" />
      <div className="flex-col p-3">
        <div>
          <h3 className="text-lg font-semibold mb-8">{title}</h3>
          <p className="text-sm text-gray-300 mb-17">{description}</p>
        </div>
        <p className="text-xs text-gray-400">Published:</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}

export default function LatestNews() {
  return (
    <section className="bg-black py-5 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Latest news</h2>
        <div className="flex items-center gap-2">
          <button className="text-white px-4 hover:underline">See All</button>
          <button className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700">
            {"<"}
          </button>
          <button className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700">
            {">"}
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <NewsCard
          image={LatestNewsImage1}
          title="An exclusive interview with David Brown - Mr. Piano man"
          description="1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won’t want to miss!"
          date="04/18/2021"
        />
        <NewsCard
          image={LatestNewsImage2}
          title="An exclusive interview with David Brown - Mr. Piano man"
          description="1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won’t want to miss!"
          date="04/18/2021"
        />
      </div>
    </section>
  );
}
