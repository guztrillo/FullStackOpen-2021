import React from 'react'

export const Anecdote = ({anecdote, votes, name, current}) => {
     return (
          <div>
               <h2>{name}</h2>
               <p>{anecdote[current]}</p>
               <p>has {votes[current]} votes</p>
          </div>
     )
}
