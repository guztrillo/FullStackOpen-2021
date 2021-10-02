import React, { useState } from 'react';
import { Anecdote } from './Anecdote';
import { Button } from './Button';


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const max = anecdotes.length - 1;
  const votesArray = new Array(anecdotes.length).fill(0);
  const current = Math.floor(Math.random() * (max+1));
  const [next, setNext] = useState(current)
  const [votes, setVote] = useState(votesArray)
  console.log(next)
  const handleNext = () => {
    setNext(Math.floor(Math.random() * (max+1)))
  }

  const handleVote = () => {
    console.log(next)
    const copy = [...votes];
    copy[next] += 1;
    setVote([...copy]);
  }
  
  const mostVoted = votes.map((vote, index) => {
    return {index, vote}
  }).sort((a,b) => b.vote - a.vote);


  return (
    <div>
        <Anecdote anecdote={anecdotes} votes={votes} name="Anecdote of the day" current={next}/>
        <Button name="Vote + 1" action={handleVote}/>
        <Button name="Next Anecdote" action={handleNext}/>
        <h2>Anecdote with most votes</h2>
        {
            votes.every(vote => vote === 0)
            ?
              <p>No votes yet</p>
            :
              <div>
                  <p>{anecdotes[mostVoted[0].index]}</p>
                  <p>has {votes[mostVoted[0].index]} votes</p>
              </div>
        }
        
    </div>
  );
}

export default App;
