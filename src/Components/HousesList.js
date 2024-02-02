import React from "react";
import { House } from "./House";
import { housesApi } from "../rest/HousesApi.js";
import { NewHouseForm } from "./NewHouseForm.js";

// HousesList component manages the list of houses
export class HousesList extends React.Component {
  state = {
    houses: [],
  };

  // Fetch houses when component mounts
  componentDidMount() {
    this.fetchHouses();
  }

  // Function to fetch houses from the API
  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
  };

  // Function to update a house
  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
  };

  // Function to add a new house
  addHouse = async (newHouse) => {
    await housesApi.post(newHouse);
    this.fetchHouses();
  };

  render() {
    return (
      <div className="house-list">
        <h2 className="listHeader">List of Houses</h2>
        <NewHouseForm addHouse={this.addHouse} />
        {this.state.houses.map((house) => (
          <House
            house={house}
            key={house._id}
            updateHouse={this.updateHouse}
            addHouse={this.addHouse}
          />
        ))}
      </div>
    );
  }
}
