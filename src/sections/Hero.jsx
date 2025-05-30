//Your source for the arts.

import Container from "../subcomponents/Container";
import Hero2 from "./Hero2";

export default function Hero() {
  return (
    <section className="hero-bg h-screen flex flex-col justify-center text-white lg:items-start">
      <Container>
        <h1 className="text-6xl leading-[72px] lg:w-1/4 font-bold">
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
