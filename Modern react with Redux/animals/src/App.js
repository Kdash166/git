import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
//test
//console.log(getRandomAnimal())

function App() {
  const [animals, setAnimals] = useState([]);
  // const [count, setCount] =useState(0);
  // this is array destructuring
  // you never change count using vanilla JS reassignment IE count = 123
  // you would use the Setter function setCount
  // state is data only way we can change what is displayed in react
  // if you want to change what the user is viewing due to their own action
  // you need to uses state max of four states per module is a good rule.
  // otherwise consider refactoring code or make smaller modules.

  // the default value is only used once it is then thrown away.
  // this will update a peice of state and it will also rerender on the page.
  // count is stored in state it will never reference the initial use state again.
  // when you call setState again it will continue to rerender
  // react will automatically rerun our component again and again and again when
  // a state changes.

  // event handler or a callback function
  // this is just a term to say it is for it to be called automartically
  // by another peice of code or user action.
  // event handler convention is with handle handle + MouseMove and the event over the button.
  // if you use () this will immediately invokes the function
  // you dont want this you want the function to be envoked when the user clicks the button
  // if your fucntion is immediately called it means the button doesnt have
  //  a reference as the function is just invoked so it cannot call the function again

  const handleClick = () => {
    // you wouldnt use animals.push(getRandomAnimals())
    // as it directly modifies state.
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

//   map takes every element out of an array 

  return (
    <div>
      <button onClick={handleClick}>
        {/* small callbacks are normally just added directly into props
    We call this function inline as it is inline with the html */}
        Add Animal
      </button>

      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
