import { useEffect, useState } from "react";
import { getData } from "../services/getEvents";
import Card from "../subcomponents/shared/Card";
import PopularEventsBg from "../assets/images/popular-events/bg.png";
import Container from "../subcomponents/Container";
export default function ArtOrganizations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    async function getDataFromJson() {
      const data = await getData("artOrganizations");
      setData(data);
      setLoading(false);
      setHearts(Array(data.length).fill(false));
      console.log(data);
    }
    getDataFromJson();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleHeart = (index) => {
    setHearts((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      <section id="art-organizations" className={`text-white pb-10`}>
        <Container>
          <div className="flex flex-col gap-7">
            <div>
              <h1 className="font-content font-[700] text-heading-2">
                Art Organizations
              </h1>
            </div>
            <div className="flex flex-row gap-6 pb-10">
              {data.map((event, index) => {
                return (
                  <Card
                    title={event.title}
                    location={event.location}
                    price={event.price}
                    date={event.date}
                    description={event.description}
                    img={event.image}
                    key={`${event.title} ${index}`}
                    tags={event.tags}
                    priceNote={event.priceNote}
                    isLiked={hearts[index]}
                    index={index}
                    onHeart={handleHeart}
                    isArtOrganization={true}
                    carouselIndex={event.carouselIndex}
                    carouselMax={event.carouselMax}
                  ></Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
