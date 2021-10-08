import React from 'react'

export const Total = ({parts = []}) => {
     return (
          <strong>
               Total of { parts.reduce((total, part) => {return total + part.exercises}, 0)}  exercises
          </strong>
     )
}
