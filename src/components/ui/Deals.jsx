import React from 'react'
import { PlusIcon } from "lucide-react"

export default function Deals(props) {
  return (
    <div className='flex flex-col py-2 mx-5 rounded-md justify-between px-5 bg-secondary shadow-md lg:my-0 my-5'>
        <div className='flex justify-between'>
            <span className='pr-20 w-1/2 text-lg font-bold'>{props.title}</span>
            <span>{props.nb}</span>
        </div>
        <div className='flex items-end pt-10'>
            <PlusIcon width={45} className='border h-10 border-black rounded-full'/>
        </div>
    </div>
  )
}
