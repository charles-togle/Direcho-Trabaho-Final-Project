import Container from "../subcomponents/Container";
import spotlightPerformanceData from "../hooks/FetchData";
import SpotlightCardContent from "../subcomponents/performance-spotlight/SpotlightCardContent";
import LoadingSpinner from "../subcomponents/LoadingSpinner";
import Grid from "../subcomponents/Grid";

// CSS
import "../styles/performance_spotlight/performance-spotlight.css";

export default function PerformanceSpotlights() {
  const { data, loading } = spotlightPerformanceData();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Container>
        <section className="spotlight__container">
          <h1>Performance Spotlights</h1>
          <Grid className="spotlight__grid__container">
            {data.map((data, index) => (
              <SpotlightCardContent key={index} data={data} />
            ))}
          </Grid>
        </section>
      </Container>
    </>
  );
}
