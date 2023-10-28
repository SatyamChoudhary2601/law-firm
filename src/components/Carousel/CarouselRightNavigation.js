import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import { RightArrow } from '../../assets';
const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)
    useEffect(() => {
        swiper.on("slideChange", function (e) {
            setIsEnd(swiper.isEnd)
        })
    }, [swiper, swiper.isEnd])
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div >
    )
}

export default CarouselRightNavigation