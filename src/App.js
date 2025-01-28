import React, { useState } from "react";
import axios from "axios";
import UserTable from "./components/UserTable";

function App() {
  const [users, setUsers] = useState([]);

  function getRandomUserId() {
    return Math.floor(Math.random() * 82) + 1;
  }

  async function fetchRandomUser() {
    const randomUserId = getRandomUserId();
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/${randomUserId}/`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  async function addRecord() {
    const user = await fetchRandomUser();
    if (user) {
      setUsers([...users, user]);
    }
  }

  function deleteRecord(index) {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <h1>Random User Table</h1>
      <button onClick={addRecord} className="add-btn">
        Add Record
      </button>
      <UserTable users={users} deleteRecord={deleteRecord} />
    </div>
  );
}

export default App;
