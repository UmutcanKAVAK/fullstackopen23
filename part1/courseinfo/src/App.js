const Header = (props) => {
  return (
    <div>
      <h1>
        The name of the course is :{props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        Name of the part1 is {props.part1}
        Number of exercises that part1 has {props.exercises1}
        <br />
        Name of the part1 is {props.part2}
        Number of exercises that part1 has {props.exercises2}
        <br />
        Name of the part1 is {props.part3}
        Number of exercises that part1 has {props.exercises3}
      </p>
    </div>
  )
}



const Total = (props) => {
  return (
    <div>
      <p>
        Total amount of exercises = {props.total}
      </p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercise31={exercises3}
      />

      <Total total={total} />
    </div>
  )

}
export default App
