import React from 'react'
import { PlusIcon } from "lucide-react"

export default function Deals(props) {
  return (
    <div className={`flex flex-col py-4 mx-5 rounded-md justify-between px-5 ${props.order == 1 ? "bg-background text-white" :"text-background bg-secondary"}  shadow-md lg:my-0 my-5 border`} >
        <div className='flex justify-between'>
            <span className='pr-20 w-1/2 text-lg font-bold'>{props.title}</span>
            <span>{props.nb}</span>
        </div>
        <div className='flex items-end pt-10'>
            <PlusIcon width={30} strokeWidth={2} color={props.order == 1 ? 'white' : 'gray'}  className='border-2 rounded-full'/>
        </div>
    </div>
  )
}
