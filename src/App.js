import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./pages/Users";
import Products from "./pages/Products";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import ViewProduct from "./products/ViewProduct";
import SearchUser from "./users/SearchUser";

import BuyProducts from "./pages/BuyProducts";

import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/buyproducts" element={<BuyProducts />} />

          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:userId" element={<EditUser />} />
          <Route exact path="/viewuser/:userId" element={<ViewUser />} />
          <Route exact path="/searchuser" element={<SearchUser />} />

          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route
            exact
            path="/editproduct/:productId"
            element={<EditProduct />}
          />
          <Route
            exact
            path="/viewproduct/:productId"
            element={<ViewProduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
