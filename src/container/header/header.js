import React from 'react'
import styles from './header.module.scss'
import {Search, Logo, Burger} from '../../assets/icons/icons'

const Header = () => {
  return (
    <div className={styles.Header_wrapper}>
      <div className='container'>
        <div className={styles.inner}>
            <div className={styles.logo}> 
                <Logo/>
                <Burger/>
            </div>
            <div className={styles.links}>
                <ul className={styles.header_ul}>
                    <li><a href="#about">O проекте</a></li>
                    <li><a href="#new">Новости культуры</a></li>
                    <li><a href="#course">Курсы</a></li>
                    <li><a href="#favourites">Избранное</a></li>
                </ul>
            </div>
            <div className={styles.terms}>
                <div className={styles.lang_select}>
                    <select name="" id="">
                        <option value="">ЎЗ</option>
                    </select>
                </div>
                <div className={styles.search}>
                    <button className={styles.search_btn}><Search/></button>
                    <div className={styles.search_place}>
                        <input className='Text here ...' type="search" name="" id="" />
                    </div>
                </div>
                <div className={styles.sign}>
                    <button className='univ_btn'>Войти</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
