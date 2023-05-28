import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BuyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/getAllProducts");
    setProducts(result.data);
  };

  return (
    <div className="container">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Buy Fruits
      </div>

      <div className="row">
        {/* card loop here */}

        {products.map((product) => (
          <div key={product.productId} className="col-md-3 ">
            <div className="card w-100 " style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={`/product/${product.image}`}
                alt="Card"
              />

              <div className="card-body ">
                <h5 className="card-title">{product.productName}</h5>
                <h6 className="price">Price: Rs. {product.price}</h6>
                <div className="mt-3 d-flex justify-content-around">
                  <Link className="btn btn-primary btn-dark">Add To Cart</Link>

                  <Link className="btn btn-primary">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
