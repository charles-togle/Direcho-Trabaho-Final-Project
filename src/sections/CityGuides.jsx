import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../services/getEvents";
import LoadingSpinner from "../subcomponents/LoadingSpinner";
import CityCard from "../subcomponents/city-guide/CityCard";
import left_icon from "@/assets/icons/left_icon.png";
import right_icon from "@/assets/icons/right_icon.png";
import Container from "../subcomponents/Container";

export default function CityGuides({ title = "City Guides" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataFromJson() {
      const data = await getData("cityGuides");
      setData(data);
      setLoading(false);
      console.log(data);
    }
    getDataFromJson();
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Container>
        <section className="lg:h-[80vh] xl:h-[73vh] 2xl:h-[75vh] w-full mx-auto pb-15 py-5 flex flex-col justify-end">
          <div className="flex items-center justify-between py-5">
            <h2 className="text-white text-lg font-semibold">{title}</h2>

            <div className="flex items-center gap-2">
              <button className="bg-base-shade rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center">
                <img
                  src={left_icon}
                  alt="left arrow"
                  className="w-16px h-7.47px"
                />
              </button>
              <button className="bg-base-shade rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center">
                <img
                  src={right_icon}
                  alt="right arrow"
                  className="w-16px h-7.47px"
                />
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-hidden">
            {data.map((item, index) => (
              <CityCard key={index} image={item.image} text={item.name} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
