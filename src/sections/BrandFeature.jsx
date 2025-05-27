//Get your brand featured on RCA today!

import "../styles/card.css";
import { Card } from "../subcomponents/Card";

export default function BrandFeatured({ image }) {
  return (
    <section className="brand-featured">
      <Card
     title="Get your brand featured on RCA today!"
     description="Looking for more exposure? Need help selling ticket? We got your back."
     buttonText="Learn more"
     image={image}
     />
    </section>
  );
}
