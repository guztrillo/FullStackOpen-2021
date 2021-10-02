import React from 'react'
import { StatisticLine } from './StatisticLine'

export const Statistics = ({ good, neutral, bad, total}) => {
     return (
          <>
               <h2>Statitics</h2>
               {
                    (good || neutral || bad)
                         ?
                         <table>
                              <tbody>
                                   <StatisticLine name="good" statitic={good} />
                                   <StatisticLine name="neutral" statitic={neutral} />
                                   <StatisticLine name="bad" statitic={bad} />
                                   <StatisticLine name="all" statitic={total} />
                                   <StatisticLine name="averge" statitic={ ((good - bad )/(total)).toFixed(2)}/>
                                   <StatisticLine name="positive" statitic={(good / total * 100).toFixed(2)}/>
                              </tbody>
                         </table>
                         : 
                         <p>
                              No feedback given
                         </p>
               }
          </>
     )
}
