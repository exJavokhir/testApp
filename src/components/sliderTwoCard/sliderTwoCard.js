import style from './sliderTwoCard.module.scss'
import El from '../../assets/images/Ellipse 1.png'
import React from 'react'

const SliderTwoCard = ({image, text}) => {
  return (
    <div className={style.SliderTwoCard_wrapper}>
        <img src={image} alt="" />
        <h3>{text}</h3>
        <a href="#">слушать</a>
    </div>
  )
}

export default SliderTwoCard
