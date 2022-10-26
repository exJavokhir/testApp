import React from 'react'
import style from './home.module.scss'
import Bg from '../../assets/images/bg.png'
import Image1 from '../../assets/images/image1.png'
import Bg1 from '../../assets/images/bg1.png'
import Bg2 from '../../assets/images/bg2.png'
import Bg3 from '../../assets/images/bg3.png'
import Bg4 from '../../assets/images/bg4.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { SliderOneCard, SliderTwoCard, SliderThreCard, SliderFourCard, SliderFiveCard } from '../../components'
import Slider from 'react-slick'
import { data_one, data_three, data_two, data_four, data_five } from '../../data/collection'
import { settings, settings2 } from '../../helpers/settings'

const Home = () => {
  return (
    <div className={style.home_wrapper}>
        <div className={style.banner_wrapper} style={{backgroundImage:`url(${Bg})`}}>
            <div className="container">
                <div className={style.banner_inner}>
                    <h2 className={style.banner_name}>Lorem ipsum dolor sit amet, <br /> consectetur ad duis </h2>
                    <p className={style.banner_text}>Lorem ipsum dolor sit amet, consectetur</p>
                    <button className='univ_btn'>Подробнее</button>
                </div>
            </div>
        </div>
        <div className={style.about_project} id="about">
            <div className="container">
                <div className={style.inner}
                    style={{
                        backgroundImage: `url(${Bg1}), url(${Bg2})`
                    }}
                >
                    <h1>О проекте</h1>
                    <div className={style.content}>
                        <div className={style.left_side}>
                            <img src={Image1} alt="" />
                        </div>
                        <div className={style.right_side}>
                            <p className='univ_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam massa magna adipiscing in mattis tellus aliquam vestibulum. Nulla eget ultrices vitae, neque proin in egestas etiam. Metus rhoncus ut diam adipiscing egestas tellus felis, mauris viverra.</p>
                            <button className='univ_btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.about_work} style={{backgroundImage:`url(${Bg3})`}}>
            <div className="container">
                <div className={style.inner}>
                    <h2 className='univ_holder'>Что мы делаем?</h2>
                    <p className='univ_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum aliquet non egestas ullamcorper eu cursus fermentum. Nisl fames morbi etiam faucibus ut sed sit dis volutpat. Pellentesque libero lectus iaculis tincidunt morbi. Arcu interdum urna vitae venenatis. Nisl fames morb iaculis tincidunt morbi. Arcu interdum urna vitae venenatis. Nisl fames morb iaculis tincidunt morbi. Arcu interdum urna vitae venenatis.</p>
                </div>
            </div>
        </div>
        <div className={style.slider} id="new">
            <div className="container">
                <div className={style.inner}>
                    <h1 className='univ_holder'>Новости культуры на сегодня</h1>
                    <Slider {...settings}>
                        {
                            data_one?.map((el, index)=>{
                                return <div className={style.card} key={index}>
                                            <SliderOneCard
                                                image1={el.image1}
                                                image2={el.image2}
                                                text={el.text}
                                            />
                                        </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <div className={style.slider}>
            <div className="container">
                <div className={style.inner}>
                    <h1 className='univ_holder'>Музыка</h1>
                    <Slider {...settings2}>
                        {
                            data_two?.map((el,index)=>{
                                return <div className={style.card} key={index}>
                                    <SliderTwoCard image={el.image1} text={el.text}/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <div className={`${style.slider} ${style.other}`}
            style={{backgroundImage:`url(${Bg4})`}}
        >
            <div className="container">
                <div className={style.inner}>
                    <h1 className='univ_holder'>Тур по музею</h1>
                    <Slider {...settings2}>
                        {
                            data_three?.map((el,index)=>{
                                return <div className={style.card} key={index}>
                                    <SliderThreCard image={el.image} label={el.label}/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <div className={style.slider} id="course">
            <div className="container">
                <div className={style.inner}>
                    <h1 className='univ_holder'>Видео</h1>
                    <Slider {...settings2}>
                        {
                            data_four?.map((el,index)=>{
                                return <div className={style.card} key={index}>
                                    <SliderFourCard image={el.image} text={el.label}/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <div className={`${style.slider} ${style.another}`} id="favourites">
            <div className="container">
                <div className={style.inner}>
                    <h2 className='univ_holder'>Рекомендуем вам</h2>
                    <Slider {...settings2}>
                        {
                            data_five?.map((el,index)=>{
                                return <div className={style.card} key={index}>
                                    <SliderFiveCard image={el.image} text={el.label}/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
