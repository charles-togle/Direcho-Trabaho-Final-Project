//Your source for the arts.

import Container from "../subcomponents/Container";
import BrandFeatured from "./BrandFeature";
import Hero2 from "./Hero2";

export default function Hero() {
  return (
    <section className="hero-bg h-[65vh] md:h-[85vh] lg:h-screen flex flex-col justify-center text-white lg:items-start">
      <Container>
        <h1 className="w-full font-bold text-4xl md:text-5xl lg:w-2/6 xl:w-1/4 lg:leading-[62px] 2xl:leading-[72px] 2xl:text-6xl">
          Your source for the arts.
        </h1>
        <p className="text-xl py-5 font-semibold leading-[100%]">
          Search events, concerts, artists and much more.
        </p>
      </Container>
      <Hero2 />
    </section>
  );
}
