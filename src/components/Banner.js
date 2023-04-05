import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'




const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl-mb:24' >
    <div className='flex flex-col lg:flex-row' >
    <div className='lg:ml-8 xl:ml-[138px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0' >
        <h1 className='text-4xl lg:text-[56px] font-semibold leading-none mb-5' >
        <span className='' >Rent </span>Your Dream House With Us.
        </h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, vitae excepturi! Fugit quidem sed expedita ducimus eligendi quae esse autem sit temporibus architecto corrupti veniam, minima excepturi facilis, labore velit?</p>
      </div>

      {/* img */}
      <div>
        <img src={Image} alt='banner' />
      </div>
    </div>
      
      <Search />
    </section>
  )
};

export default Banner;
