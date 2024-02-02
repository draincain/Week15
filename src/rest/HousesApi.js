const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

// Class for interacting with the houses API
class HousesApi {
  get = async () => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      console.log("data", data);
      return data;
    } catch (e) {
      console.log("OOps, looks like fetchHouses had an issue.", e);
    }
  };

  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (e) {
      console.log("OOps, looks like updating houses had an issue.", e);
    }
  };

  post = async (house) => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (e) {
      console.log("OOps, looks like adding a house had an issue.", e);
    }
  };
}

// Create an instance of HousesApi
export const housesApi = new HousesApi();
