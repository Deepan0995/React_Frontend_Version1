import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setuser] = useState({
    userName: "",
    password: "",
    mobile: "",
    address: "",
    roleName: "",
  });

  const { userName, password, mobile, address, roleName } = user;

  const onInputChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveUser", user);
    navigate("/users");
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Add User
      </div>

      <form
        onSubmit={(e) => onSubmit(e)}
        className=" form-group m-2 p-3 shadow "
      >
        <div className="d-flex flex-column ">
          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="userName" className="col-sm-2 col-form-label">
              User Name
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter User Name"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>

            <div className="col-sm-5">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                placeholder="**********"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="mobile" className="col-sm-2 col-form-label">
              Mobile
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
                placeholder="+91"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter Address"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="roleName" className="col-sm-2 col-form-label">
              Role
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="roleName"
                name="roleName"
                value={roleName}
                onChange={(e) => onInputChange(e)}
                placeholder="Role"
              />
            </div>
          </div>

          <div className=" d-flex justify-content-center  mt-4">
            <button type="submit" className="mx-3 btn btn-outline-primary ">
              Submit
            </button>
            <Link className="btn btn-outline-danger " to="/users">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
