import { useState } from 'react'

import style from './style.module.css'
import logo from '../../assets/logo.png'

import Menu from '../menu/menu'

export default function Navbar(props) {
    const [menu, setMenu] = useState(true)

    return (
        <div className={style['navbar_content']}>
            <div className={style['navbar']}>
                <div>
                    <img src={logo}></img>
                </div>

                <div>
                    <Menu />
                </div>
            </div>

            <div className={style['sub_option']}>
                Home
            </div>
            <hr></hr>
            <div className={style['sub_option']}>
                Home
            </div>
        </div>
    )
}