import React, {useState, useEffect, createContext} from 'react';
import {housesData} from '../data'

//creating context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {

  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  return (
    <HouseContext.Provider value={''} >
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
