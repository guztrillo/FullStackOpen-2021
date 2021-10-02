import React from 'react'

export const Button = ({name, action}) => {
     return (
          <button onClick={action}>
               {name}
          </button>
     )
}
