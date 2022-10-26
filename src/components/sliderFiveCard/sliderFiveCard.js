import style from './sliderFiveCard.module.scss'

import React from 'react'

const SliderFiveCard = ({image, text}) => {
  return (
    <div className={style.SliderFourCard_wrapper}>
      <img src={image} alt="" />
      <p className='univ_text'>{text}</p>
    </div>
  )
}

export default SliderFiveCard
