import Button from "../subcomponents/shared/Button";
// CSS
import "../styles/hero/hero.css";

export default function Hero2() {
  return (
    <section className="hero2__section__container">
      <div className="hero2__content__container">
        <div className="hero2__brand__image__container">
          <h1>Get your brand featured on RCA today! </h1>
          <h2>
            Looking for more exposure? Need help selling tickets? We got your
            back
          </h2>
          <Button className="featured__button" variant="bgGradient">
            Learn more
          </Button>
          <Button></Button>
        </div>
        <div className="hero2-bg bg__container"></div>
      </div>
    </section>
  );
}
