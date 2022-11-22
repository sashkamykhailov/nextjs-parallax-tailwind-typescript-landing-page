import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props { 
    id: string
    name: string
    socialId: string
    link: string
}

const Member: React.FC<Props> = ({id, name, socialId, link}) => {
  return (
    <div className="flex flex-col justify-center align-center items-center">
        <Image src={`/assets/team/elon.svg`} alt={name} width={160} height={160}/>
        <div className="text-2xl xl:text-3xl">
            {name}
        </div>
        <div className="text-xl">
            <Link href={link}>
                <div>{socialId}</div>
            </Link>
        </div>
    </div>
  )
}

export default Member