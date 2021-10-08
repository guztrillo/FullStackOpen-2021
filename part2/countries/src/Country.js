import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Weather } from './Weather';
const apikey = process.env.REACT_APP_API_KEY;

export const Country = ({country}) => {
     const [weather, setWeather] = useState({});
     const url = `http://api.weatherstack.com/current?access_key=${apikey}&query=${country.capital}`

     useEffect(() => {
          axios.get(url)
               .then(resp => setWeather(resp.data.current))
     }, [url])
     return (
          <div>
               <h2>{country.name}</h2>
               <p>Capital: {country.capital}</p>
               <p>Population: {country.population}</p>
               <h3>Languages</h3>
               <ul>
               {
                    country.languages.map((language, index) => 
                         <li key={country.name+"-"+index}>{language.name}</li>
                    )
               }
               </ul>
               <img src={country.flags.png} alt={country.name + 'flag'} />
               <Weather capital={country.capital}
                         temperature={weather.temperature} 
                         wind={weather.wind_speed} 
                         windDir={weather.wind_dir}
                         img={weather.weather_icons}
               />
          </div>
     )
}
