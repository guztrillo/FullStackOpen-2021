import React from 'react'

export const Person = ({ name, number, person, handleDelete }) => {
     return (
          <div>
               <span>
                    {name} {number}
               </span>
               {
                    person && 
                    <button onClick={() => handleDelete(person)}>
                    delete
                    </button>
               }
          </div>
     )
}
