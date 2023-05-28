import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    quantity: "",
    price: "",
  });

  const { productId } = useParams();

  const { productName, quantity, price } = product;

  const onInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const loadProduct = async () => {
      const result = await axios.get(
        `http://localhost:8080/getProductById/${productId}`
      );
      setProduct(result.data);
    };

    loadProduct();
  }, [productId]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/updateProduct/${productId}`,
      product
    );
    navigate("/products");
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h5 p-2 my-3">
        Edit Product
      </div>

      <form
        onSubmit={(e) => onSubmit(e)}
        className=" form-group m-2 p-3 shadow "
      >
        <div className="d-flex flex-column ">
          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="productName" className="col-sm-2 col-form-label">
              Product Name
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                value={productName}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter Product Name"
              />
            </div>
          </div>
          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="quantity" className="col-sm-2 col-form-label">
              Quantity
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
                placeholder="Qty"
              />
            </div>
          </div>

          <div className="form-group row justify-content-center mt-3">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Price
            </label>

            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter price"
              />
            </div>
          </div>

          <div className=" d-flex justify-content-center  mt-4">
            <button type="submit" className="mx-3 btn btn-outline-primary ">
              Submit
            </button>
            <Link className="btn btn-outline-danger " to="/products">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
