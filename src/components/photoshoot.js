import React from 'react'
import img from '../images/16-600x400.jpg'
import Para from './para';
import { Paragraph } from './data';
import Head from './head'
import { Heading } from './data'

export default function Photoshoot() {
  return (
    <>
    <div className='container-fluid border h-[300px] sm:h-[400px]'>
        <img className='h-[65%] w-[100%]' src={img}></img>
        <div className='bg-black h-[35%] text-white flex items-center justify-center hover:bg-white hover:text-black duration-1000 cursor-pointer'>
            <div className='w-[90%] leading-loose'>
            <Para data={{para:<p className='italic text-gray-500 text-left'>{Paragraph.p11}</p>}}/>
            <Head data={{head:<h1 className='text-[19px] sm:text-[25px] leading-none font-bold'>{Heading.h10}</h1>}}/>
            </div>
        </div>
        </div> 
    </>
  )
}
