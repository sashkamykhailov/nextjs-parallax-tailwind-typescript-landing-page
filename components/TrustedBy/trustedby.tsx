import React from 'react'
import ClientLogos from '../Slider/client-logo'
import Testimonials from '../Testimonials/testimonials'
import styles from './trustedby.module.css'

const TrustedBy = () => {
  return (
    <section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${styles.bg}`}>
        <div className="fkex-1"></div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl mb-10 font-bold text-center">
                <span className="whitespace-nowrap">Some companies</span>{' '}
                <span className="whitespace-nowrap">that works with us daily:</span>
            </h3>
            <ClientLogos/>
            <ClientLogos/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="container mx-auto lg:max-w-[70%] lg:px-10">
                <h3 className="text-3xl lg:text-4xl tracking-tight px-10 font-bold text-center !leading-[3.5rem]">
                    We knows what exactly you want and everything that you desire to have.
                </h3>
            </div>
        </div>
        <div>
            <Testimonials/>
        </div>
        <div className="fkex-1 bg-black"></div>
    </section>
  )
}

export default TrustedBy