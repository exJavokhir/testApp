import style from './sliderOneCard.module.scss'
import React from 'react'

const SliderOneCard = ({image1, image2, text}) => {
  return (
    <div className={style.SliderOneCard_wrapper}>
        <div className={style.left_side}>
            <img className={style.image_one} src={image1} alt="" />
            <img className={style.image_two} src={image2} alt="" />
        </div>
        <div className={style.right_side}>
            <p className='univ_text'>{text}</p>
            <a className={style.slider_link} href="#">Читать подробнее</a>
        </div>
    </div>
  )
}

export default SliderOneCard
