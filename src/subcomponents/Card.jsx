export function Card ({title, description, buttonText, image}) {
  return <div>
    <div className="card-left">
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-btn">
        <button>{buttonText}</button>
      </div>
    </div>
    <div className="card-right">
      <img src={image} alt={title} />
    </div>
  </div>
}
