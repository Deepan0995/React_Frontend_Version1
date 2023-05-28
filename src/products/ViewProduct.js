import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [product, setProduct] = useState({
    productName: "",
    quantity: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getProductById/${productId}`
        );
        setProduct(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h5 p-2 my-3">
        Product Details
      </div>
      <div className="card">
        <div className="card-header">
          Details of Product ID: {product.productId}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Product Name:</b> {product.productName}
            </li>
            <li className="list-group-item">
              <b>Quantity</b> {product.quantity}
            </li>
            <li className="list-group-item">
              <b>Price</b> {product.price}
            </li>
          </ul>
        </div>
        <Link className="btn btn-primary my-2" to="/products">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
