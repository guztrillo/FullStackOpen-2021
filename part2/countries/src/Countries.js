import React from 'react'
import { Country } from './Country'
import { ListCountries } from './ListCountries'

export const Countries = ({countries, search, show, handleShow}) => {
     if(search){
          if(countries.length > 10){
               return <p>To many matches, specify another filter</p>
          }
          else if (countries.length <= 10 && countries.length > 1){
          
               return countries.map(country => <ListCountries 
                                                  key={country.name} 
                                                  country={country} 
                                                  show={show} 
                                                  handleShow={handleShow}
                                                />)

          } else if (countries.length === 1) {
               return <Country 
                         country={countries[0]} 
                         show={show} 
                         handleShow={handleShow}
                       />

          } else if (countries.length === 0) {
               return <p>{search} doesn't exists</p>
          }
     }

     return (
          <p>
               Search countries
          </p>
     )
}
