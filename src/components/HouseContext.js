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
  
  //return all countries
  useEffect(() => {
    const allCountries = houses.map((houses) =>{
      return houses.country;
    });
    console.log(allCountries)

    //remove duplicate countires
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

    console.log(uniqueCountries)

    //set country state
    setCountries(uniqueCountries)
  }, [])

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading

    }} >
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
