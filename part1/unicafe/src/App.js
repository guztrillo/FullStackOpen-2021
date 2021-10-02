import React, { useState } from 'react'
import { Button} from './Button'
import { Statistics } from './Statistics'

const App = () => {
     const [good, setGood] = useState(0);
     const [neutral, setNeutral] = useState(0);
     const [bad, setBad] = useState(0);
     const [total, setTotal] = useState(0);

     const handleGood = () => {
          setGood(good + 1);
          setTotal(total + 1);
     }

     const handleNeutral = () => {
          setNeutral(neutral + 1);
          setTotal(total + 1);
     }

     const handleBad = () => {
          setBad(bad + 1);
          setTotal(total + 1);
     }

     return (
          <>
               <h1>Give feedback</h1>
               <Button name="good" handleFeedback={handleGood}/>
               <Button name="neutral" handleFeedback={handleNeutral}/>
               <Button name="bad" handleFeedback={handleBad}/>
               <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
          </>
     )
}

export default App;