import React, { useState } from "react";

export const NewRoomForm = (props) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState(undefined);
  // adding state to show/hide the form
  const [showForm, setShowForm] = useState(false);

  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setArea(int >= 0 ? int : "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && area) {
      props.addNewRoom({ name, area });
      setName("");
      setArea("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div>
      <h4>Add a new room</h4>
      <button className="mb-1" onClick={() => setShowForm(!showForm)}>
        {!showForm ? "Add Room" : "Hide Form"}
      </button>
      {showForm && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="area"
            onChange={handleAreaInput}
            value={area}
          />
          <button type="submit">Submit Room</button>
        </form>
      )}
    </div>
  );
};
