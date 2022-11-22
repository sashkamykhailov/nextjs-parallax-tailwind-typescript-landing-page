import React from 'react'
import Carousel from '../Carousel/carousel'
import CarouselItem from '../Carousel/carousel-item'
import Review from '../Carousel/review'

const Testimonials: React.FC = () => <Carousel className='bg-black text-white py-10 lg:py-20'>
    <CarouselItem index={0}>
        <Review by="Oleksandr Mykhailov">
            Contact for more.
        </Review>
    </CarouselItem>
    <CarouselItem index={1}>
        <Review by="Oleksandr Mykhailov">
            Contact for more.
        </Review>
    </CarouselItem>
    <CarouselItem index={2}>
        <Review by="Oleksandr Mykhailov">
            Contact for more.
        </Review>
    </CarouselItem>
    <CarouselItem index={3}>
        <Review by="Oleksandr Mykhailov">
            Contact for more.
        </Review>
    </CarouselItem>
    <CarouselItem index={4}>
        <Review by="Oleksandr Mykhailov">
            Contact for more.
        </Review>
    </CarouselItem>
</Carousel>

export default Testimonials