import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import Para from './para';
import { Paragraph } from './data';
import Head from './head';
import { Heading } from './data';
import { FooterData } from './data';
import { FaFacebook,FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <div className='container-fluid border grid grid-cols-1 sm:grid-cols-4   md:grid-cols-8'>
    <div className='h-[400px] sm:h-[200px] ' style={{backgroundImage:`url(${img1})`,backgroundSize:"100% 100%"}}>
        <Para data={{para:<p className='p-[5px] text-center bg-black text-pink-400 font-bold text-[14px] w-[90%]'>{Paragraph.p1}</p>}}/>
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img2})`,backgroundSize:"100% 100%"}}>  
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img3})`,backgroundSize:"100% 100%"}}>   
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img4})`,backgroundSize:"100% 100%"}}>
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img5})`,backgroundSize:"100% 100%"}}> 
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img6})`,backgroundSize:"100% 100%"}}>   
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img7})`,backgroundSize:"100% 100%"}}>
    </div>
    <div className='h-[400px] sm:h-[200px]' style={{backgroundImage:`url(${img8})`,backgroundSize:"100% 100%"}}>
    </div>
        </div>
        <div className='container-fluid bg-black flex flex-col justify-center items-center'>
          <div className='container w-[70%] py-[45px] flex justify-between bg-black grid  grid-cols-1  md:grid-cols-3 '>
            <div className='w-[70%] bg-black'>
              <Head data={{head:<h1 className='text-gray-600 text-[30px] font-bold'>{Heading.h4}</h1>}}/>
              <hr className='mt-[5px]'></hr>
              <div className='text-gray-400 mt-[16px]'>
              {
                FooterData.li1.map((ele,i)=>{
                  return(
                      <li className='list-none leading-loose  hover:text-pink-300 durarion-1000 cursor-pointer'>{ele}</li>  
                  )
                })
              }
              </div>
            </div>
            <div className='w-[70%]'>
              <Head data={{head:<h1 className='text-gray-600 text-[30px] font-bold'>{Heading.h5}</h1>}}/>
              <hr className='mt-[5px]'></hr>
              <div className='text-gray-400 mt-[16px]'>
              {
                FooterData.li2.map((ele,i)=>{
                  return(
                      <li className='list-none leading-loose hover:text-pink-300 durarion-1000 cursor-pointer'>{ele}</li>  
                  )
                })
              }
              </div>
            </div>
            <div className='w-[70%]'>
              <Head data={{head:<h1 className='text-gray-600 text-[30px] font-bold'>{Heading.h6}</h1>}}/>
              <hr className='mt-[5px]'></hr>
              <div className='text-gray-400 mt-[16px]'>
              {
                FooterData.li3.map((ele,i)=>{
                  return(
                      <li className='list-none leading-loose hover:text-pink-300 durarion-1000 cursor-pointer'>{ele}</li>  
                  )
                })
              }
              </div>
            </div>
          </div>
          <div className='container py-[40px] flex justify-between w-[70%]'>
            <Para data={{para:<p className='text-gray-600 italic'>{Paragraph.p2}</p>}}/>
            <div className='w-[80px] flex justify-between text-[18px]'>
              <FaFacebook className='text-gray-400'/>
              <FaTwitter className='text-gray-400'/>
            </div>
          </div>
          </div>  
    </>
  )
}
