import Image from 'next/image'
import React from 'react'

export default function Values(props) {
  return (
    <div className='flex flex-col items-center py-5'>
        <Image src={props.icon} alt='' />
        <span className='py-2 font-bold'>{props.title}</span>
        <span className='w-3/4 text-center text-gray-400'>{props.descp}</span>
    </div>
  )
}
