import React from 'react'
import Head from './head'
import { Heading } from './data'
import img1 from '../images/11-1140x570.jpg';
import img2 from '../images/01-1140x570.jpg';
import img3 from '../images/20-150x100.jpg'
import img4 from '../images/02-1140x570.jpg';
import img5 from '../images/10-150x100.jpg';
import Para from './para';
import { Paragraph } from './data';


export default function Selected() {
  return (
    <>
    <div className='container-fluid h-[auto]'>
        <Head data={{head:<h1 className='text-[30px] font-bold '>{Heading.h7}</h1>}}/>
        <div className='grid grid-cols-1 gap-y-5 grid-rows-1 bg-white border-t-4 border-black  p-[30px]  md:p-[3px] xl:p-[30px] flex flex-wrap  justify-center'>
            <div className='flex items-center justify-between'>
                <img className='h-[65px] w-[80px] sm:w-[105px]' style={{backgroundSize:"100% 100%"}} src={img1}></img>
                <Para data={{para:<p className='text-[9px] sm:text-[12px]  md:text-[9px] lg:text-[12px] hover:text-pink-300 duration-1000 cursor-pointer'>{Paragraph.p3}</p>}}/>
            </div>
            <div className=' flex items-center justify-between'>
                 <img className='h-[65px] w-[80px] sm:w-[105px]' style={{backgroundSize:"100% 100%"}} src={img2}></img>
                <Para data={{para:<p className='text-[9px] sm:text-[12px]  md:text-[9px] lg:text-[12px] hover:text-pink-300 duration-1000 cursor-pointer'>{Paragraph.p4}</p>}}/>
            </div>
            <div className='w-[93%] flex items-center justify-between'>
                 <img className='h-[65px]  w-[80px] sm:w-[105px]' style={{backgroundSize:"100% 100%"}} src={img3}></img>
                <Para data={{para:<p className='text-[9px] sm:text-[12px]  md:text-[9px] lg:text-[12px] hover:text-pink-300 duration-1000 cursor-pointer'>{Paragraph.p5}</p>}}/>
            </div>
            <div className='w-[95%]  flex items-center justify-between'>
                 <img className='h-[65px]  w-[80px] sm:w-[105px]' style={{backgroundSize:"100% 100%"}} src={img4}></img>
                <Para data={{para:<p className='text-[9px] sm:text-[12px]  md:text-[9px] lg:text-[12px] hover:text-pink-300 duration-1000 cursor-pointer'>{Paragraph.p6}</p>}}/>
            </div>
            <div className='flex items-center justify-between'>
                 <img className='h-[65px] w-[80px] sm:w-[105px]' style={{backgroundSize:"100% 100%"}} src={img5}></img>
                <Para data={{para:<p className='text-[9px] sm:text-[12px]  md:text-[9px] lg:text-[12px] hover:text-pink-300 duration-1000 cursor-pointer'>{Paragraph.p7}</p>}}/>
            </div>
        </div>
        </div> 
    </>
  )
}
