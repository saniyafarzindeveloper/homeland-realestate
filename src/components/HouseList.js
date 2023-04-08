import React, {useContext} from 'react';

//IMPORT CONTEXT
import {HouseContext} from './HouseContext'

//import components
import House from './House'

import {Link} from 'react-router-dom'

//import icons
import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {

  const {houses, loading} = useContext(HouseContext)

  console.log(houses)

  return (
    <section className='mt-20' >
      <div className='container mx-auto' >
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14' >
          {houses.map((house, index) =>{
            return (
              <Link to={`/property/${house.id}`}  key={index} >
                <House house = {house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
