import React from "react";
import UserRow from "./UserRow";
import "../app.css"

function UserTable({ users, deleteRecord }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Birth Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow
            key={index}
            user={user}
            index={index}
            deleteRecord={deleteRecord}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
