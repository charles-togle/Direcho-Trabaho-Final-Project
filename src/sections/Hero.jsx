import Container from "../subcomponents/Container";
import Hero2 from "./Hero2";
// CSS
import "../styles/hero/hero.css";

export default function Hero() {
  return (
    <section className="hero-bg hero__container">
      <Container>
        <h1 className="hero__heading">Your source for the arts.</h1>
        <p className="hero_content">
          Search events, concerts, artists and much more.
        </p>
      </Container>
      <Hero2 />
    </section>
  );
}
