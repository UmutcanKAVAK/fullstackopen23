import { useState } from 'react'

/*Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering: */
const Button = ({ anecdotes }) => {
  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState(new Array(8).fill(0)); // Use state to store the votes array
  console.log("votes",JSON.stringify(votes));
  const handleVote = () => {
    const copy = [...votes]; // Make a copy of the votes array using the spread operator
    copy[random] += 1; // Update the copy of the votes array
    setVotes(copy); // Update the state with the new copy of the votes array

  };

    const max_index = votes.indexOf(Math.max(...votes))
  console.log("maximum vote value inside of votes array",JSON.stringify(Math.max(...votes)), "and it's index is",);
    return (
      <div>
        {anecdotes[random]} <br />
        <h1>has {votes[random]} votes</h1>
        <button onClick={() => { setRandom(Math.floor(Math.random() * 8)) }}>
          Next anectode
        </button>
        <button onClick={handleVote}>vote</button>
        <h1>Anectode with most votes.</h1>
        <h1>has {Math.max(...votes)}</h1>
        <h1>{anecdotes[max_index]}</h1>
      </div>
    );
  };
  //Now implement the final version of the application that displays the anecdote with the largest number of votes:

  const App = () => {

    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]
    return (
      <Button anecdotes={anecdotes} />
    )
  }

  export default App