"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import SimledGirl from "../../assets/SmileImage.png"
import { Selector } from '../ui/Selector'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Booking() {
    const [date, setDate] = useState(null);
  return (
    <div className='pt-40 flex flex-col text-white'>
        <div className=''>
            <Image src={SimledGirl} alt='' className='w-full sm:h-full h-96 object-cover'  />
        </div>
        <div className=' bg-background pt-5 sm:pb-28 pb-10 rounded-xl px-5'>
            <span className='sm:text-6xl text-5xl'>Book Online Now</span>
            <div className='flex flex-col sm:pt-16 pt-8'>
                <span className='font-thin'>Book your appointment bellow and we will connect you on the day of the appointment</span>
                <div className='w-full py-6 rounded-3xl px-5 mt-5 border bg-white grid lg:grid-cols-5 md:grid-cols-3 gap-5 lg:justify-items-between '>
                    <Input type="text" placeholder="Name" className="bg-white outline-none " />
                    <Input type="email" placeholder="Email" className="bg-white outline-none"  />
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "pl-5 pr-16 justify-start font-normal",
                                !date && "text-muted-foreground bg-white"
                            )}
                            >
                            <CalendarIcon className="mr-2 w-[16px]" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Selector />
                    <Button className="" >Book Now !</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
