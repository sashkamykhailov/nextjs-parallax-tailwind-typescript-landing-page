import React, {useRef, useContext, useState, useCallback} from 'react'
import Member from '../Member/member'
 
const Aboutus: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>Do you remember last Christmas? </strong> Have you enjoyed? This is the best holidays in our life.
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2> Our Team </h2>
            <div className="mt-2">will help you!</div>
            <div  className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
                <Member
                    id='1' 
                    name='Marc' 
                    socialId="@mrousaby" 
                    link='https://google.com'
                />
            </div>
        </div>
    </section>
  )
}

export default Aboutus