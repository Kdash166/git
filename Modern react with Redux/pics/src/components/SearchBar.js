import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
    // in react you never use document.querySelector... . value
    // to grab data from the input in react! it doesnt work
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
      {/* automatic submit event triggered if you wrap input in form  amd hit enter*/}
    </div>
  );
}

export default SearchBar;
