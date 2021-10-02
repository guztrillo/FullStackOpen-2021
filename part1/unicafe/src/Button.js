import React from 'react'

export const Button = ({name, handleFeedback}) => {
     return (
          <button onClick={handleFeedback}>
               {name}
          </button>
     )
}
