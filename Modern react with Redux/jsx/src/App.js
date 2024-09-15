import ProfileCard from "../../pdas/src/profileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
    
    <ProfileCard />
    <ProfileCard />
    <ProfileCard />
    </div>
  )
    
  
}

// export default App;

// exports and imports//

//  you can import a default export by another name 
// import MyApp from "./App" - this comes in handy
// if you have two of the same exports named 
// the same within a file or if you import 
//  something from a third party lib.

// named export //

// need to use curly braces 
// export {message}
// import {message from './App'}
// you cannot reasign a named export. 
// you would have to do this after the fact
// newMessage = message
// use newMessage from then on. 
// ./App or ../App is something that we have created
// it is a relative path 
// 'react' is a package
// ../ up 
//"../../Components/common/button"
