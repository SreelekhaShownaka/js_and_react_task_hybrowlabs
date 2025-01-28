import React from "react";
import "../app.css";

function UserRow({ user, index, deleteRecord }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.height}</td>
      <td>{user.mass}</td>
      <td>{user.birth_year}</td>
      <td>
        <button onClick={() => deleteRecord(index)} className="delete-btn">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
