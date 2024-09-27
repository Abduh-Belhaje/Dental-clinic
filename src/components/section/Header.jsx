import React from 'react'
import Doctor from "../../assets/Doctor.png"
import Image from 'next/image'
import InputField from '../ui/InputField'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Hy from "../../assets/Hy.png"
import Button from '../ui/Button';

export default function Header() {
  return (
    <div className='relative'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
    <div className='flex flex-col md:py-28 py-16 w-full'>
        <span className='text-sm py-1 flex'>
            <Image src={Hy} alt="" width={20} className='mr-1' />
            Hey! We Are Dentic
        </span>
        <span className='lg:text-6xl md:text-5xl text-3xl font-bold md:pb-16 pb-10 pt-10 md:w-4/5 w-full'>
            Helping You to Bring Back Your Happy Smile
        </span>
        <p className='text-xs text-gray-500 md:w-4/5 w-full text-justify'>
            Welcome to Bayfront, where your smile is our priority. Located in the heart of Miami, we offer top-quality dental care for the whole family, specializing in everything from routine checkups to advanced cosmetic treatments.
            Book your appointment today and experience gentle, compassionate care in a comfortable environment.
        </p>

        <Button 
                value="Book now !"
                style="block md:hidden w-fit px-5 mt-5 text-md text-xs bg-secondary text-white py-2 rounded"
                />
    </div>
    <div className='w-full bg-blue-100 '>
        <Image 
            src={Doctor} 
            height={600}
            alt='' 
            className='object-cover'
        />
    </div>
</div>

    <div className='hidden md:flex bg-white z-20  justify-center '>
        <div className='lg:w-4/5 shadow-md border'>
        <div className='flex md:flex-row flex-col justify-around md:px-0 px-10'>
          <InputField 
            icon={<Mail className='text-secondary'/>} 
            type="email" 
            title="Email Address"
            placeholder="Email"
            />
          <InputField 
            icon={<Phone className='text-secondary'/>} 
            type="phone" 
            title="Pone Number"
            placeholder="Phone"
            />
          <InputField 
            icon={<Calendar className='text-secondary'/>} 
            type="Date" 
            title="Date"
            placeholder="Date"
            />

            <div className='px-5 py-6 flex items-end'>
              <Button 
                value="Book now !"
                style="h-fit md:px-4 md:text-lg text-xs bg-secondary text-white py-1 rounded"
                />
            </div>

        </div>
        </div>
    </div>
    </div>
  )
}
