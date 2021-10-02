import React from 'react'
import { Part } from './Part'

export const Content = ({parts}) => {
     return (
          <>
               { parts.map((part, index) => {
                    return <Part part={part.name} exercises={part.exercises} key={`part-${index}`}/>
               })}
          </>
     )
}
