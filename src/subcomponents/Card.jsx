import "../styles/card.css";

export function Card ({title, description, buttonText, image, className = ""}) {
  return <div className={`card-component ${className}`}>
    <div className="card-left">
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-btn-wrapper">
        <button className="card-btn">{buttonText}</button>
      </div>
    </div>
    <div className="card-right">
      <img src={image} alt={title} />
    </div>
  </div>
}
