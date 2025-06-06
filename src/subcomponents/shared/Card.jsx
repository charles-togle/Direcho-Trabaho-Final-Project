import Details from './Details'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Tag from './Tag'
import CarouselIndicator from '../CarouselIndicator'
export default function EventCard ({
  img,
  title,
  location,
  price,
  date,
  description,
  priceNote,
  tags,
  isLiked,
  index,
  onHeart = () => {},
  carouselMax,
  carouselIndex,
  isArtOrganization = false
}) {
  return (
    <div id='card' className='relative'>
      <div
        className='absolute right-2 top-2 z-2 cursor-pointer'
        onClick={() => onHeart(index)}
      >
        {isLiked ? (
          <AiFillHeart color='white' fill='red' size={24} />
        ) : (
          <AiOutlineHeart color='white' size={24} />
        )}
      </div>
      <div className='relative'>
        <img src={img} alt='picture' className='w-full' />
        <div className='absolute right-1/2 translate-x-1/2 bottom-3'>
          <CarouselIndicator
            max={carouselMax}
            index={carouselIndex}
          ></CarouselIndicator>
        </div>
      </div>
      <div
        className={`${
          ((title === 'Hamilton' || isArtOrganization) &&
            'bg-[rgba(17,17,18,1)]') ||
          'bg-black'
        } p-6 rounded-br-2xl rounded-bl-2xl`}
      >
        <Details
          title={title}
          location={location}
          price={price}
          date={date}
          description={description}
          z
          priceNote={priceNote}
        ></Details>
        <div id='tags' className='flex flex-row gap-2 mt-4'>
          {Array.isArray(tags) &&
            tags.map(tag => <Tag tag={tag} key={tag}></Tag>)}
        </div>
      </div>
    </div>
  )
}
