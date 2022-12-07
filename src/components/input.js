import React from 'react'
import {FaSistrix} from './data';

export default function Input() {
  return (
    <>
    <div className='h-[60px] flex items-center text-white'>
    <input className='bg-pink-300 pl-[20px]  w-[90%] h-[100%] border-none outline-none text-[15px] text-white' type='text' placeholder="Type Keyword to search"></input>
    <button className='h-[100%] w-[10%] bg-pink-300 font-bold'>
    <FaSistrix className=''/> 
    </button>
    </div>
    
    </>
  )
}
