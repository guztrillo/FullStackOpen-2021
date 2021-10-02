import React from 'react'

export const Total = ({parts}) => {
     return (
          <>
               <p>Number of exercises {parts.reduce((total, part) => {
                                             return total + part.exercises
                                        },0)}
               </p>
          </>
     )
}
