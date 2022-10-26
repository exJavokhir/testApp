import React from 'react'
import style from './footer.module.scss'
import {Logo, Location, Mail, Phone, Telegram} from '../../assets/icons/icons'

const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <div className="container">
        <div className={style.inner}>
            <div className={style.block_one}>
                <Logo/>
                <ul className={style.footer_ul}>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#">Новости культуры</a></li>
                    <li><a href="#">Деятели культуры</a></li>
                    <li><a href="#">Издания</a></li>
                    <li><a href="#">Виртуальные туры</a></li>
                    <li><a href="#">Клубы</a></li>
                    <li><a href="#">Курсы</a></li>
                    <li><a href="#">Рейтинги</a></li>
                </ul>
            </div>
            <div className={style.block_two}>
                <ul>
                 О нас
                 <li><a href=""><Location/><span>г. Ташкент адрес</span></a></li>
                 <li><a href=""><Phone/><span>+998 99 999 99 99</span></a></li>
                 <li><a href=""><Mail/><span>почта</span></a></li>
                </ul>
            </div>
            <div className={style.block_thre}>
                <h2>Подпишитесь на нашу <br /> рекламу</h2>
                <div className={style.main_place}>
                    <input placeholder='Ваш E-Mail' type="text" name="" id="" />
                    <button><Telegram/></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
