import React from 'react'

export default function InputField(props) {
  return (
    <div className='py-5 lg:px-6 md:px-2 px-1 '>
        <span className='flex'>{props.icon} <span className='pl-5'>{props.title}</span></span>
        <input 
          type={props.type} 
          placeholder={props.placeholder} 
          className='border rounded outline-none py-1 px-2 mt-4'
          />
    </div>
  )
}
