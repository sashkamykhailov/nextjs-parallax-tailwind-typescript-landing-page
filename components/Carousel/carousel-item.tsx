import React from 'react';
import { CarouselContext } from './carousel';
import styles from './carousel.module.css'

interface Props {
    index: number;
    children: JSX.Element;
}

export const CarouselItem: React.FC<Props> = ({ children, index}) => {
    const {embla: emblaApi, selectedIndex} = React.useContext(CarouselContext)
    const isActive = selectedIndex === index
    const handleClick = React.useCallback(() => {
        if (emblaApi === undefined) return
            emblaApi.scrollTo(index)
    }, [emblaApi, index])

    return(
        <div className={`${styles.slide} relative ${isActive ? 'active': ''}`}
        onClick={handleClick}
        >
            {children}
        </div>
    )
}

export default CarouselItem