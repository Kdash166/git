import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />)

// Parent Component -> passes prop -> child component //
// child components do not pass data back to the parent only parent to child. 
// it is passed as a prop object. 
//  the prop system makes up about 25% of everything there is to know about react. 

// common react conventions //

// must use the same property name 
// common mstakes is not using the correct key then, the value wont render to the 
// page. You can use a console.log to show this information
// console.log(title, handle) for example 
// prop parent and child names must match 
// destructuring only the props you need directly into the function call 
// is common practice in react.