import React from 'react'
import Head from './head'
import { Heading } from './data'
import { FaFacebookF,FaTwitter,FaPinterestP,FaHeart,FaInstagram } from './data'


export default function Social() {
  return (
    <>
     <div className='container-fluid'>
       <Head data={{head:<h1 className='text-[30px] font-bold '>{Heading.h11}</h1>}}/>
        <div className='bg-white h-[8vh] border-t-4 border-black flex items-center justify-evenly'>
            <FaFacebookF className='hover:text-pink-400 duration-1000 cursor-pointer'/>
            <FaTwitter className='hover:text-pink-400 duration-1000 cursor-pointer'/>
            <FaInstagram className='hover:text-pink-400 duration-1000 cursor-pointer'/>
            <FaPinterestP className='hover:text-pink-400 duration-1000 cursor-pointer'/>
            <FaHeart className='hover:text-pink-400 duration-1000 cursor-pointer'/>
        </div>
        </div> 
    </>
  )
}
