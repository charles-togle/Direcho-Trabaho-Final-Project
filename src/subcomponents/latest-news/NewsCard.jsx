import React from 'react'

const NewsCard = ({ image, title, description, date }) => {
  return (
    <div className='flex bg-[#1E1F22] text-white rounded-[16px] w-3/4 h-[282px]'>
      <img src={image} alt={title} className='w-[251px] h-[251px] m-3.5' />
      <div className='flex-col p-3'>
        <div>
          <h3 className='text-xl font-semibold mb-6'>{title}</h3>
          <p className='text-sm text-white opacity-60 mb-14'>{description}</p>
        </div>
        <p className='text-lg text-white'>Published:</p>
        <p className='text-lg text-white'>{date}</p>
      </div>
    </div>
  )
}

export default NewsCard
