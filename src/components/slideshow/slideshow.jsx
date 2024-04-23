import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'
import default_image from '../../assets/default_image.jpg'

export default function SlideShow(props) {
    const [contentStyle, setContentStyle] = useState({width: "100vw", height: "25vh", padding: "2%", boxSizing: "border-box", ...props.style})
    const [imageIndex, setImageIndex] = useState(0)

    const images = props.images ?? [default_image]

    useEffect(() => {
        setImage(imageIndex);
    }, []);

    function nextImage() {
        const index = imageIndex + 1
        setImage(index)
    }

    function lastImage() {
        const index = imageIndex - 1
        setImage(index)
    }

    function setImage(index) {
        if (index >= images.length)
            index = 0
        if (index < 0)
            index = images.length - 1
        setImageIndex(index)
        setContentStyle({...contentStyle, backgroundImage: `url(${images[index]})`})
    }

    return (
        <div className={style["slideshow_content"]} style={contentStyle}>
            <button onClick={() => lastImage()}>
                <FontAwesomeIcon icon={faChevronLeft} size='2xl' className={style["icon"]}/>
            </button>
            <button onClick={() => nextImage()}>
                <FontAwesomeIcon icon={faChevronRight} size='2xl' className={style["icon"]}/>
            </button>
        </div>
    )
}