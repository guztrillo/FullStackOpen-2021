import React from 'react'

export const Weather = ({temperature, capital, wind, img, windDir}) => {
     return (
          <div>
               <h3>Weather in {capital}</h3>
               <p><strong>Temperature:</strong> {temperature} Celcius</p>
               {img && <img src={img[0]} alt={`weather icon in ${capital}`} />}
               <p><strong>Wind:</strong> {wind} mph direction {windDir}</p>
          </div>
     )
}
