import React from "react";

import left_icon from "@/assets/icons/left_icon.png";
import right_icon from "@/assets/icons/right_icon.png";

import SanFrancisco from "@/assets/images/city-guides/SanFrancisco.png";
import NewYorkCity from "@/assets/images/city-guides/NewYorkCity.png";
import Miami from "@/assets/images/city-guides/Miami.png";
import LosAngeles from "@/assets/images/city-guides/LosAngeles.png";
import Chicago from "@/assets/images/city-guides/Chicago.png";
import Seattle from "@/assets/images/city-guides/Seattle.png";
import Container from "../subcomponents/Container";

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
    <>
      <Container>
        <section className="h-[70vh] w-full mx-auto pb-15 py-5 flex flex-col justify-end">
          <div className="flex items-center justify-between py-5">
            <h2 className="text-white text-lg font-semibold">{title}</h2>

            <div className="flex items-center gap-2">
              <button className="bg-gray-800 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center">
                <img
                  src={left_icon}
                  alt="left arrow"
                  className="w-16px h-7.47px"
                />
              </button>
              <button className="bg-gray-800 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center">
                <img
                  src={right_icon}
                  alt="right arrow"
                  className="w-16px h-7.47px"
                />
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-hidden">
            {cityItems.map((item, index) => (
              <CityCard key={index} image={item.image} text={item.name} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
