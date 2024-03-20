import Axios from "axios";
import React, { useEffect, useState } from "react";

const UserFC = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch();
  }, []);

  let displayUser = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <pre>{JSON.stringify(users)}</pre>
      {users.length > 0 ? (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id} onClick={displayUser.bind(null, user.name)}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default UserFC;
