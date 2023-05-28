import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    mobile: "",
    address: "",
    roleName: "",
  });
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getUserById/${userId}`
        );
        setUser(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h5 p-2 my-3">
        User Details
      </div>
      <div className="card">
        <div className="card-header">
          Details of User ID: {user.userId}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>User Name:</b> {user.userName}
            </li>
            <li className="list-group-item">
              <b>Password:</b> {user.password}
            </li>
            <li className="list-group-item">
              <b>Mobile:</b> {user.mobile}
            </li>
            <li className="list-group-item">
              <b>Address:</b> {user.address}
            </li>
            <li className="list-group-item">
              <b>Role</b> {user.roleName}
            </li>
          </ul>
        </div>
        <Link className="btn btn-primary my-2" to="/users">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
