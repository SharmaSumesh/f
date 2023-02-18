import React, { useState } from "react";

import { Users } from "./Users";
const App = () => {
  const [query, setquery] = useState("");
  const onchaneevent = (event) => {
    console.log(event.target.value);
    setquery(event.target.value);
  };
  const key = ["first_name", "last_name", "email"];
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={onchaneevent}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          // <li key={user.id} className="listItem">

          //   {user.first_name}
          // </li>
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>Surname</th>
                <th>Email</th>
              </tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
            </tbody>
          </table>
        ))}
      </ul>
    </div>
  );
};

export default App;
