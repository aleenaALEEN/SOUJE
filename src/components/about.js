import React from 'react'
import img from '../images/image-widget-2.jpg'
import Head from './head'
import { Heading } from './data'



export default function About() {
  return (
    <> 
    <div className='h-[250px] sm:h-[350px] w-[100%] flex justify-center items-center'
    style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${img})`,backgroundSize:"100% 100%"}}>
      <Head data={{head:<h1 className='underline text-white text-[35px] font-bold'>{Heading.h8}</h1>}}/>
    </div>
    </>
  )
}
