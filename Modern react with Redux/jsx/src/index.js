// 1) import react and react dom Liberaries
import React from "react";
// react that knows what a component is.
import ReactDOM from "react-dom/client";
// this lib is for displaying these components on the browser.
import App from './App';
//  2) get a reference div with an ID of root
const el = document.getElementById("root");

//  3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component
//function App() {
// code to compute valyes we want to show in our JSX is normally at the top
//const inputType = "number";
//const maxInput = 10;
//const  minInput = 1;
// could be used for shopping cart

//let message = 'Bye there!'
//const name ="Samantha";
//const age = 23;

  //if(Math.random()>0.5){
    //message = 'Hello There!'
  // react doesnt know how to render boolean values/null/undefined
  // Arrays are concatinated with commas removed. 
  // if you try to print an object this will return an error. 
  // we most commanly display strings and numbers so this is what 
  // react handles. 

  //}

  //Content we want the component to show is normally at the bottom 


  //return <h1>{new Date().toLocaleTimeString()}</h1>
  //  you can also insert logic directly into these curly braces
  // it might make it easier or more clear to stor this in a variable 
  // or place it directly into the component it depends on what the variable 
  // and logic needed is.

  //return <h1>{message}</h1>;
  // you can insert variables directly into JSX using curly braces

  //return (<h1>Hi my name is {name}. My ages is {age}</h1>);
// react will interpolate the variables into the string without the need 
// for backticks.

// return <input style ={{border: '3px solid red'}} type={inputType}
//  min={minInput} 
//  max={maxInput}/>;
//  props //
//return <textarea autoFocus={true} />
// here is an example of props it states the type and other attributes props 
// is short for properties. the browser adds in the arrows and limits the numerical 
// inputs props can be confusing because they are similar to html attributes. 
// for props stings are always wrapped in double quotes and numbers are always 
// wrapped with curly braces. If you dont do this it will throw an error. 

// one good think about props is you can define them as variables and insert them 
// in this also means you can change them.

// for reference 
// Array list = {[1,2,3]} - wrap array in curly braces
// Objects style = {{color: 'red'}} - wrap object in curly braces
// you cannot show the object on the in an element but can provide an object as a prop
// you can see this in style.
// type ="number" - double quotes
// min ={4} - numbers in double quotes
//  var = {message} - variables in curly braces


//}
// 5) show component in browser
root.render(<App />);

// JSX
// JSX is not valid javascript 
// it is ran through a tool called Babel 
// this translate JSX into valid javascript
// when you use .createElement it returns an object with different 
// information about the component. This informs react as to what 
// it needs to display.
// you can use babel.io/repl to view what happens to JSX when it is transpiled 
// into JS.
// it is hard to tell with just the equivelent function calls from react 
// what is going on so the only reason we use JSX is to reduce complexity.
// wrting out JSX elements doesnt automatically display them in the browser
// you need to return the element always.

// converting HTML to JSX //

// attributes in html are different from those in JSX 
//  1: all JSX are camelCase in html they are in lowercase
//  if you mess this up react will tell you in the console

//  2:Number attributes use curly braces
// maxLength ={5}

//  3: Boolean 'true' can be written with just the property name but 'False' 
// should be in curly braces.

// input spellCheck is the same as spellCheck ="true" in html
// but you would have to write spellCheck = {false}

// 4: 'class' attribute is written as 'className' 
// html class="" in JSX className=""  this is done because class has very special
// meaning in javascript.

// 5: in-line styles are provides as objects.
// in html style = "text-decoration: 'none', padding-top: '5px'"
// in html the style properties and values are strings using kebab case 
// in JSX  style ={{textDecoration: 'none',paddingTop:'5px'}}
// in JSX the style props are camelCase and are single strings.

// Extracting components //

// name a file with a Capital letter
// generally means a new component is made. 
// returns JSX export it and then export it 
// then use it

