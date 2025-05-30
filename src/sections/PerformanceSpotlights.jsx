import Container from "../subcomponents/Container";

export default function PerformanceSpotlights() {
  return (
    <>
      <Container>
        <section className="h-screen mt-20">
          <h1 className="text-white mb-10 text-heading-2 font-bold">
            Performance Spotlights
          </h1>
          <div className="grid grid-cols-4 gap-7">
            <div className="h-[390px] bg-gray-300"></div>
            <div className="h-[390px] bg-gray-300"></div>
            <div className="h-[390px] bg-gray-300"></div>
            <div className="h-[390px] bg-gray-300"></div>
          </div>
        </section>
      </Container>
    </>
  );
}
