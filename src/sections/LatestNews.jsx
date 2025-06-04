import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../services/getEvents";
import LoadingSpinner from "../subcomponents/LoadingSpinner";
import Container from "@/subcomponents/Container.jsx";
import SeeAllNavigation from "../subcomponents/SeeAllNavigation";
import NewsCard from "../subcomponents/latest-news/NewsCard";

export default function LatestNews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataFromJson() {
      const data = await getData("latestNews");
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
    <Container>
      <section className="bg-black py-5 text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Latest news</h2>
          <SeeAllNavigation />
        </div>
        <div className="flex justify-between gap-5">
          {data.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              date={news.date}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
