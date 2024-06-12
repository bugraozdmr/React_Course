import "bulma/css/bulma.css";
import { useState } from "react";

function SearchHeader({search}){
    const [value,setValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //debugger;
        // atama yapıyor
        search(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
      <>
        <form onSubmit={handleFormSubmit}>
        <span className="tag is-warning mt-2 px-2">Ne arıyorsunuz ?</span>
          <input
            className="input is-success mt-2 px-2"
            type="text"
            placeholder="Feel free"
            onChange={handleChange}
          />
        </form>
      </>
    );
}

{/* Burasi lazim */}
export default SearchHeader