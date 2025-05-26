//Get your brand featured on RCA today!

import "../styles/card.css";

export default function BrandFeatured({ image }) {
  return (
    <section className="brand-featured">
      <div className="brand-featured-text">
        <div className="brand-featured-text-wrapper">
          <h2>Add you events and get featured!</h2>
          <p>
            Join Red Curtain Addict as an organization and get exclusive access
            to promotions & features.
          </p>
          <button className="brand-featured-btn">Join Today</button>
        </div>
      </div>
      <div className="brand-featured-img">
        <img src={image} alt="Brand Featured" />
      </div>
    </section>
  );
}
