import React from 'react'
import reviews from '../data'
import {FaQuoteLeft,FaQuoteRight,FaGem} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
const Card = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img 
        className='aspect-square rounded-full w-[140px] h-[140px] z-[25] left-[10px]'
        src={review.image}/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10]'></div>
      </div>
     <div className='text-center mt-7'>
       <p className='font-bold text-2xl capitlize'>{review.name}</p>
    </div>
<div  className='text-center mt-7'>
    <p className='text-voilet-300 uppercase text-sm'>{review.job}</p>
 </div>
 <div className='text-voilet-400 mx-auto mt-5'>
    <FaQuoteLeft/>
 </div>
<div className='text-center mt-4 text-slate-500'>
    {review.text}
</div>
<div className='text-voilet-400 mx-auto mt-5'>
    <FaQuoteRight/>
 </div>
 <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
    <button className='cursor-pointer text-voilet-500'>
        <FiChevronLeft/>
    </button>
    <button className='cursor-pointer text-voilet-500'>
  <FiChevronRight/>
    </button>
 </div>
 <div>
    <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
    cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
        Surprise Me
        </button>
    
 </div>
 

    </div>
  )
}

export default Card
