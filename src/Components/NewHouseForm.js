import React, { useState } from "react";
import "../styles.css";

export const NewHouseForm = (props) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      props.addHouse({ name });
      setName("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div className="container mt-3 new-house-form">
      <h4>Enter House Name Below</h4>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Add House
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
