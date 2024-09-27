import React from 'react'
import Button from '../ui/Button'

export default function BusinessHours() {
  return (
    <div className='md:py-0 py-20 flex md:flex-row justify-between flex-col'>
        <div className=' flex flex-col md:w-1/2 w-full'>
            <Button value="why Choose Us" style="w-fit  py-1 px-3 text-secondary border rounded" />
            <span className='lg:text-6xl text-5xl font-bold py-4  lg:w-4/5 w-full'>Helping Your Dental Problems</span>
            <p className='lg:text-sm text-xs text-gray-500 py-1 lg:w-4/5 w-full text-justify'>We believe that every smile tells a story, and we’re here to help make yours shine. Our Miami-based dental clinic is led by Dr. [Name], a passionate and highly qualified dentist with over 
                [X] years of experience. Our team is dedicated to providing personalized, gentle care, ensuring that every visit is as comfortable as possible.</p>
            <div className='flex flex-col'>
                <div className='flex  lg:w-4/5 w-full justify-between pt-10 pb-2 '>
                    <span className='font-bold'>Dental and Mounth Care</span>
                    <span className='font-bold'>95%</span>
                </div>
                <div className='relative bg-background h-3 lg:w-4/5 w-full rounded'>
                    <div className='absolute bg-secondary w-11/12 h-3 rounded'></div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex  lg:w-4/5 w-full justify-between pt-7 pb-2 '>
                    <span className='font-bold'>Cosmetic Treatment</span>
                    <span className='font-bold'>87%</span>
                </div>
                <div className='relative bg-background h-3 lg:w-4/5 w-full rounded'>
                    <div className='absolute bg-secondary w-4/5 h-3 rounded'></div>
                </div>
            </div>
        </div>
        <div className='flex lg:justify-center md:justify-end justify-center items-center md:py-0 py-16'>
            <div className='shadow-lg md:w-2/3 w-full h-fit py-10 px-5 md:ml-10'>
            <span className='text-3xl font-bold '>Don t Hesitate to DO Consultation</span>
            <p className='text-gray-500 text-sm py-2'>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec.</p>
            <div className='flex w-full justify-between pb-2 pt-5'>
                <span className='font-bold'>Monday – Friday</span>
                <span>9 AM – 5 PM</span>
            </div>
            <div className='flex w-full justify-between py-2'>
                <span className='font-bold'>Saturday</span>
                <span>9 AM – 2 PM</span>
            </div>
            <div className='flex w-full justify-between py-2'>
                <span className='font-bold'>Sunday</span>
                <span>Closed</span>
            </div>
            <div className='w-full flex justify-center pt-7'>
                <Button value="Book Now !"  style="w-fit bg-secondary text-white py-2 w-full"/>
            </div>
            </div>
            
        </div>
    </div>
  )
}


