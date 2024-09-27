import React from 'react'
import Values from '../ui/Values'
import Affordable from "../../assets/affordable.png"

export default function Hero() {
  return (
    <div className='md:py-36 pt-20 w-full flex md:flex-row flex-col justify-around'>
        <Values icon={Affordable} title="Affordable Price" descp="lorem sjh sqfbh fdbj bbh bbhb bhb hvhv hjhjb hjh" />
        <Values icon={Affordable} title="Professional Dentist" descp="lorem sjh sqfbh fdbj bbh bbhb bhb bhb hvhv hjhjb hjh" />
        <Values icon={Affordable} title="Affordable Price" descp="lorem sjh sqfbh fdbj bbh bbhb bhb bhb hvhv hjhjb hjh" />
    </div>
  )
}
