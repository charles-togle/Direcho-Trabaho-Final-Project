import React from 'react'
import Vector from '../../assets/images/performance-spotlights/Vector.png'

const SpotlightCardContent = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.image})` }}
      className='spotlight__content__container cursor-pointer'
    >
      <div className='spotlight__content'>
        <div className='spotlight__content__image'>
          <img src={Vector} alt='Vector' />
        </div>
      </div>
      <h2>{data.title}</h2>
    </div>
  )
}

export default SpotlightCardContent
