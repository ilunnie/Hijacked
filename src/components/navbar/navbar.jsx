import { useState } from 'react'

import style from './style.module.css'
import logo from '../../assets/JA-W.png'

import Menu from '../menu/menu'

export default function Navbar(props) {
    const [menu, setMenu] = useState(false)

    const links = props.links ?? []

    const isMobile = () => {
        return window.matchMedia('(max-width: 768px)').matches
    }

    return (
        <div className={style['navbar_content']}>
            <div className={style['navbar']}>
                <div>
                    <img src={logo}></img>
                </div>

                {isMobile() && 
                    <div>
                        <Menu onClick={() => setMenu(!menu)}/>
                    </div>
                }

                {!isMobile() &&
                    <div className={style['horizontal_links']}>
                        {links.map((link, index) => (
                            <>
                                {index !== 0 && <div style={{backgroundColor: "white", width: "1px"}} />}
                                <a href={link[1]}>{link[0]}</a>
                            </>
                        ))}
                    </div>
                }
            </div>

            {menu && isMobile() && links.map((link, index) => (
                <>
                    {index !== 0 && <hr key={index + "_hr"} />}
                    <div key={index} className={style['sub_option']}>
                        <a href={link[1]}>{link[0]}</a>
                    </div>
                </>
            ))}
        </div>
    )
}