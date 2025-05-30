import React from "react";

import SanFrancisco from "@/assets/images/city-guides/SanFrancisco.png";
import NewYorkCity from "@/assets/images/city-guides/NewYorkCity.png";
import Miami from "@/assets/images/city-guides/Miami.png";
import LosAngeles from "@/assets/images/city-guides/LosAngeles.png";
import Chicago from "@/assets/images/city-guides/Chicago.png";
import Seattle from "@/assets/images/city-guides/Seattle.png";

const cityItems = [
  { name: "San Francisco", image: SanFrancisco },
  { name: "New York City", image: NewYorkCity },
  { name: "Miami", image: Miami },
  { name: "Los Angeles", image: LosAngeles },
  { name: "Chicago", image: Chicago },
  { name: "Seattle", image: Seattle },
];

function CityCard({ image, text }) {
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
}

export default function CityGuides({ title = "City Guides" }) {
  return (
    <section className="w-full mx-auto pb-15 py-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>

        <div className="flex items-center gap-2">
          <button className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700">
            {"<"}
          </button>
          <button className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700">
            {">"}
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden">
        {cityItems.map((item, index) => (
          <CityCard key={index} image={item.image} text={item.name} />
        ))}
      </div>
    </section>
  );
}
