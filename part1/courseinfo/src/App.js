const Header = (props) => {
  return (
    <div>
      <p>Course - {props.course}</p>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Name :{props.name} Exercise amount :{props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  let parts = props.parts;
  console.log(props);
  return (
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  let parts = props.parts;
  return (
    <div>
      <p>
        total courses:{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default App;
