import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl-mb:24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[138px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[56px] font-semibold leading-none mb-5">
            <span className="text-violet-700">Rent </span>Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8 text-justify">
            {/* {" "} */}
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, vitae excepturi! Fugit quidem sed expedita ducimus
            eligendi quae esse autem sit temporibus architecto corrupti veniam,
            minima excepturi facilis, labore velit? */}
            Looking for your dream home or the perfect investment property? Look
            no further than HomeLand! With a
            comprehensive database of listings and expert guidance, finding your
            ideal property has never been easier. Trust me to help you navigate
            the exciting world of real estate and achieve your goals.
          </p>
        </div>

        {/* img */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="banner" />
        </div>
      </div>

      <Search />
    </section>
  );
};

export default Banner;
