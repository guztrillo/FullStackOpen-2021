import React from 'react'
import { Person } from './Person'

export const Persons = ({ persons, handleDelete }) => {
     return (
          <div>
               {
                    persons.map(person => <Person 
                                             key={person.name+'-'+person.id} 
                                             name={person.name} 
                                             number={person.number} 
                                             person={person}
                                             handleDelete={handleDelete}
                                        />)
               }
          </div>
     )
}
