import React from "react";

//import data
import { housesData } from "../data";

import { useParams } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { Link } from "react-router-dom";

const PropertyDetails = () => {
  //get house ID
  const { id } = useParams();
  // console.log(id);

  //get house based on ID
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  console.log(house);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            {" "}
            Price: $ {house.price}
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>

            <div className="flex gap-x-6 text-violet-800 mb-7">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiBath />
                <div>{house.bathrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiArea />
                <div>{house.surface}</div>
              </div>
            </div>

            <div>{house.description}</div>
          </div>

          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full ">
                <img src={house.agent.image} alt="agent" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
                {/* code from the above line */}
              </div>
            </div>

            {/* FORM IMPLEMENTATION */}
            <form className="flex flex-col gap-y-4" >
              <input
                className="border  border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="border  border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email*"
                required
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*"
                required
              />
              <textarea
                className="w-full outline-none border border-gray-300 focus:border-violet-700 resize-none rounded p-4 h-36 text-sm text-gray-300"
                placeholder="Message*"
                required
                defaultValue="Hello! I am interested in this property [Apartment/House]"
              ></textarea>
              <div className="flex gap-x-2" >
                <button className="bg-violet-700 rounded p-4 text-sm w-full transition text-white hover:bg-violet-800" >Send Message</button>
                <button className="border border-violet-700 text-violet-700  hover:border-violet-400  hover:text-violet-600 rounded p-4 text-sm w-full transition" >Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
