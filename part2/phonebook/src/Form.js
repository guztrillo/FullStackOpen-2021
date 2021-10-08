import React from 'react'

export const Form = ({newName, newNumber, handleNewName, handleNewNumber, handleNewPerson}) => {
     return (
          <form onSubmit={handleNewPerson}>
               <div>
                    name: <input type="text" value={newName} onChange={handleNewName} required />
               </div>
               <div>
                    number: <input type="number" value={newNumber} onChange={handleNewNumber} required/>
               </div>
               <div>
                    <button type="submit">add</button>
               </div>
          </form>
     )
}
