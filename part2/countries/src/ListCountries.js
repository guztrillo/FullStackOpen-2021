import React from 'react'
import { Country } from './Country'

export const ListCountries = ({country, show, handleShow}) => {
     return (
          <div>
               <span>{country.name}</span>
               <button onClick={handleShow} name={country.name}>
                    {
                         show[country.name]
                         ? "Hide"
                         : "Show"
                    }
               </button>
               {
                    show[country.name] && <Country country={country}/>
               }
          </div>
     )
}
