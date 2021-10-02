import React from 'react'

export const StatisticLine = ({ name, statitic }) => {
     return (
          <tr>
               <td>{name}</td>
               <td>{statitic} {name === 'positive' ? '%' : ''}</td>
          </tr>
     )
}
