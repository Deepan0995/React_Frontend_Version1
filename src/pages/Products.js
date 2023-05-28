import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/getAllProducts");
    setProducts(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteProduct/${id}`);
    loadProducts();
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Products List
      </div>
      <table className="text-center table table-hover border shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <th scope="row">{product.productId}</th>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td className="img">
                <img
                  src={`/product/${product.image}`}
                  alt="product"
                  className="img w-25 "
                />
              </td>

              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewproduct/${product.productId}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editproduct/${product.productId}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteUser(product.productId)}
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
