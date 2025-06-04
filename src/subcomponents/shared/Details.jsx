export default function Details({
  title,
  location,
  price,
  priceNote,
  date,
  description,
}) {
  return (
    <div id="details">
      <div
        id="title-price"
        className="grid grid-cols-[80%_20%] font-content mb-3"
      >
        <p className="text-heading-4 font-[600]">{title}</p>
        <p className="text-heading-3 text-center font-[400] pt-1">{price}</p>
        <p className="text-heading-5 text-white opacity-60 -mt-2 font-[400]">
          {location}
        </p>
        <p className="text-text-2 text-center text-white opacity-60 font-[300] ">
          {priceNote}
        </p>
      </div>
      {date && (
        <p id="date" className="font-[400] text-heading-4 mb-3">
          {date}
        </p>
      )}
      <p
        id="description"
        className="text-heading-5 text-white font-[400] opacity-60"
      >
        {description}
      </p>
    </div>
  );
}
