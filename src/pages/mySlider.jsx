import React from 'react';
// import Home from './pages/home';
import SliderComponent from '../components/slider2';

function MySlider() {
  return (
    <>
        <div className='h-[30vh] sm:h-[65vh] w-[80%] '>
            <SliderComponent/> 
            {/* <img className='h-[100%] w-[100%] cursor-pointer' src={img2}></img> */}
          </div>
    </>
  );
}

export default MySlider;
