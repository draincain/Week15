import React from "react";
import { NewRoomForm } from "./NewRoomForm.js";

// House component responsible for rendering a house and its rooms
export const House = (props) => {
  const { house, updateHouse } = props;

  // Function to delete a room from the house
  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  // Function to add a new room to the house
  const addNewRoom = (room) =>
    updateHouse({ ...house, rooms: [...house.rooms, room] });

  // Function to render the list of rooms
  const rooms = () => (
    <ul className="list-group mb-3 house-list">
      {house.rooms.map((room, index) => (
        <li key={index} className="list-group-item room-list-item">
          <label className="room-info">{`${room.name} Area: ${room.area}`}</label>
          <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>{house.name}</h1>
      {rooms({ rooms, houseId: house._id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
