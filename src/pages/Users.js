import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getAllUsers");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    loadUsers();
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Users List
      </div>

      <table className="text-center table table-hover border shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <th scope="row">{user.userId}</th>
              <td>{user.userName}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.roleName}</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewuser/${user.userId}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/edituser/${user.userId}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteUser(user.userId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
