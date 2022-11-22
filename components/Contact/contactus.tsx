import React from 'react';
import Image from 'next/image'

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen items-center">
        <div className="pb-10">
            <Image src="/assets/icons/snow.svg" width={130} height={130} alt='image'/>
        </div>
        <h2 className="text-4xl text-center font-bold">Contact us</h2>
            <form
            className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
            >
              <input 
              id='companyName' 
              name="companyName"
              placeholder="Your name"
              required
              maxLength={20}
              type='text'
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-4"/>
              <input 
              id='email' 
              name="email"
              placeholder="Your email"
              required
              maxLength={30}
              type='email'
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-4"/>
              <textarea id='message'
              name="message"
              required
              maxLength={128}
              placeholder='Drop us a line'
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-4 min-h-[8em]"
              ></textarea>
              <div className="text-center mt-10">
                <button 
                type='submit' 
                className="bg-white text-black rounded-3xl px-8 py-2">
                  Submit
                </button>
              </div>
            </form>
        
    </div>
  )
}

export default ContactUs