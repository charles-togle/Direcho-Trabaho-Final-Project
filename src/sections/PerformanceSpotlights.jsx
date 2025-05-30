import Container from "../subcomponents/Container";
import "../styles/performance_spotlight/PerformanceSpotlight.css";
import Vector from "../assets/images/performance-spotlights/Vector.png";
import spotlightPerformanceData from "../hooks/FetchData";

export default function PerformanceSpotlights() {
  const { data, loading } = spotlightPerformanceData();

  if (loading) {
    return <p className="text-white">Loading</p>;
  }
  return (
    <>
      <Container>
        <section className="spotlight__container">
          <h1>Performance Spotlights</h1>
          <div className="spotlight__grid__container">
            {data.map((data, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${data.image})` }}
                className="spotlight__content__container"
              >
                <div className="spotlight__content">
                  <div className="spotlight__content__image">
                    <img src={Vector} alt="Vector" />
                  </div>
                </div>
                <h2>{data.title}</h2>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
