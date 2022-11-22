import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
        <Image src='/assets/icons/snow.svg' alt='icon'  width={48} height={48}/>
        <Link href='https://github.com/'>Contact me on github</Link>
    </footer>
  )
}

export default Footer