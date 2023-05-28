import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    mobile: "",
    address: "",
    roleName: "",
  });

  const { userId } = useParams();

  const { userName, password, mobile, address, roleName } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/getUserById/${userId}`
      );
      setUser(result.data);
    };

    loadUser();
  }, [userId]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateUser/${userId}`, user);
    navigate("/users");
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h5 p-2 my-3">
        Edit User
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
                placeholder="Enter Password"
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
                placeholder="Enter Mobile"
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
                placeholder="Enter User Name"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="roleName" className="col-sm-2 col-form-label">
              Rolerole_name
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="roleName"
                name="roleName"
                value={roleName}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter Role"
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
