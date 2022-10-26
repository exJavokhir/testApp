import style from './sliderThreCard.module.scss'

import React from 'react'

const SliderThreCard = ({image, label}) => {
  return (
    <div className={style.SliderThreCard_wrapper}>
      <img src={image} alt="" />
      <span>{label}</span>
    </div>
  )
}

export default SliderThreCard
