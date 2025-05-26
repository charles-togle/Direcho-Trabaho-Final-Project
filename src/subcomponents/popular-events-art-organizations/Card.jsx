import Details from './Details'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Tag from './Tag'
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
  onHeart = () => {}
}) {
  return (
    <div id='card' className='relative'>
      <div className='absolute right-2 top-2' onClick={() => onHeart(index)}>
        {isLiked ? (
          <AiFillHeart color='white' fill='red' size={24} />
        ) : (
          <AiOutlineHeart color='white' size={24} />
        )}
      </div>
      <img src={img} alt='picture' className='w-full' />
      <div
        className={`${
          (title === 'Hamilton' && 'bg-[rgba(17,17,18,1)]') || 'bg-black'
        } p-6 rounded-br-2xl rounded-bl-2xl`}
      >
        <Details
          title={title}
          location={location}
          price={price}
          date={date}
          description={description}
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
