import React from 'react'
import { Part } from './Part'
import { Total } from './Total'

export const Content = ({parts = []}) => {
     return (
          <div>
               {
                    parts.map(part=> {
                        return <Part name={part.name} exercise={part.exercises} key={part.id} />
                    })
               }
               <Total parts={parts}/>
          </div>
     )
}
