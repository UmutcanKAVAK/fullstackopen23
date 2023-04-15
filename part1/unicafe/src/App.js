import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <h1>{text} {value}</h1>
    </div>
  )
}

const DisplayStatistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const points = (props.good) * 1 + (props.neutral) * 0 + (props.bad) * -1
  const avg = points / total
  const last = avg / 100
  let positive = ((props.good) * 1 / total) * 100
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <h1>No feedback given</h1>
  }else {
    return (
        <table>
          <tbody>
            <tr><td><StatisticLine text="Good"value={props.good}/></td>&nbsp;
            </tr>
            <tr>
              <td><StatisticLine text="Neutral"value={props.neutral}/></td>&nbsp;
            </tr>
            <tr>
              <td><StatisticLine text="Bad"value={props.bad}/></td>&nbsp;
            </tr>
            <tr>
              <td>Total {total}</td>&nbsp;
            </tr>
            <tr>
              <td>Avarage {last} </td>&nbsp;
            </tr>
            <tr>
              <td>positiv %{positive}</td>&nbsp;
            </tr>
          </tbody>
        </table>
    )
  }
}
const App = () => {
  console.log()
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <DisplayStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App