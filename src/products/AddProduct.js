import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [product, setproduct] = useState({
    productName: "",
    quantity: "",
    price: "",
    image: "",
  });

  const { productName, quantity, price, image } = product;

  const onInputChange = (e) => {
    if (e.target.name === "image") {
      setproduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setproduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/saveProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Saved Product:", response.data);

      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container p-2">
      <div className="card-header bg-warning text-center h3 p-2 my-3">
        Add Products
      </div>

      <form
        onSubmit={(e) => onSubmit(e)}
        className=" form-group m-2 p-3 shadow "
      >
        <div className="d-flex flex-column ">
          <div className="form-group row justify-content-center mt-4">
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
          <div className="form-group row justify-content-center mt-4">
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

          <div className="form-group row justify-content-center mt-4">
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

          <div className="form-group row justify-content-center mt-4">
            <label htmlFor="image" className="col-sm-2 col-form-label">
              Image
            </label>
            <div className="col-sm-5">
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(e) => onInputChange(e)}
                accept="image/*"
              />
            </div>
          </div>

          <div className=" d-flex justify-content-center mt-4">
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
