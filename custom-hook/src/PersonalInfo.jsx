import React, { useState } from "react";
import UseInput from "./UseInput";

export default function () {
    // firstname için
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  // lastname için
  const [lastName, bindLastName, resetLastName] = UseInput("");

  /*const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');*/

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Kaydedildi ==> ${firstName} - ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>First Name</label>
          {/* Spread ile value=value oldu ve onChange geldi */}
          <input
            type="text"
            placeholder="First Name"
            {...bindFirstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            {...bindLastName}
          ></input>
        </div>
        <button>Kaydet</button>
      </form>
    </div>
  );
}
