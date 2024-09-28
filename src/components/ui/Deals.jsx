import React from 'react'
import { PlusIcon } from "lucide-react"

export default function Deals(props) {
  return (
    <div className={`flex flex-col py-4 mx-5 w-64 rounded-md justify-between px-5 ${props.order == 1 ? "bg-background text-white" :"text-background bg-secondary"}  shadow-md lg:my-0 my-5 border`} >
        <div className='flex justify-between w-full'>
            <span className='w-1/3 text-lg font-bold'>{props.title}</span>
            <span>{props.nb}</span>
        </div>
        <div className='flex pt-10 items-end'>
            <PlusIcon width={35} height={35} strokeWidth={1} color={props.order == 1 ? 'white' : 'gray'}  className='border rounded-full '/>
        </div>
    </div>
  )
}
