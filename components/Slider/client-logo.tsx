import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './slider'

const ClientLogos: React.FC = () => {
  return (
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
            <Image 
            src='/assets/icons/snow.svg' 
            alt='slider-image' 
            width={150} 
            height={50} 
            objectFit="contain"/>
        </SliderItem>
    </SliderContainer>
  )
}

export default ClientLogos