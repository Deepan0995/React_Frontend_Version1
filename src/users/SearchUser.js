import axios from "axios";
import React, { useState } from "react";

export default function SearchUser() {
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `http://localhost:8080/findUserByMobile/${mobile}`
      );
      setUser({ ...result.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container  ">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Search User By Mobile
      </div>

      <form className="form-group" onSubmit={handleSearch}>
        <div className="">
          <label className="form-check" htmlFor="mobile">
            Phone Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Customer Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit" className="form-control mt-2 btn btn-primary">
          Search
        </button>
      </form>

      {user && (
        <table className="table table-hover table-bordered mt-5">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" key={user.userId}>
                {user.userId}
              </th>
              <td>{user.userName}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.roleName}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
