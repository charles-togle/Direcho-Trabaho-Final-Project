export default function CarouselIndicator ({ index, max = 5 }) {
  console.log(index)
  return (
    <div
      id='carousel-indicator'
      className='flex flex-row justify-center gap-1.25'
    >
      {Array.from({ length: max }, (_, i) => (
        <div
          key={`indicator-${i}`}
          className={`rounded-full w-1 aspect-square bg-white ${
            i === index ? 'scale-120 opacity-100' : 'opacity-[0.32]'
          }`}
        ></div>
      ))}
    </div>
  )
}
