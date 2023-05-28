import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border border-3 navbar border navbar-expand sticky-top navbar-dark  bg-dark p-3">
      <Link className="border border-2 btn btn-outline-info navbar-brand rounded  border border-light p-2">
        <img
          className="rounded-circle border border-info"
          src="/svg.jpeg"
          width="30"
          height="30"
          alt=""
        />
        Fresh Pick
      </Link>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav text-lg ">
          <li className="nav-item  ">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addUser">
              Add User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/searchuser">
              Search User
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/addproduct">
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buyproducts">
              Buy Products
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav  ">
        <li className=" mr-2">
          <Link className="border rounded nav-link btn btn-outline-danger">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
