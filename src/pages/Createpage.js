import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDataToServer } from "../apiService";

const Createpage = () => {
  const [product, setProduct] = useState({
    name: "",
    avatar: "",
    developerEmail: "eyupkirci@gmail.com",
    price: 0,
    category: "Electronic",
    description: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    postDataToServer(product).then((response) => {
      alert("Successfull " + response.status);
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2> Create Product </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Product"
          value={product.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <br />
        <input
          name="avatar"
          type="text"
          placeholder="Image Url"
          value={product.avatar}
          onChange={handleChange}
        />{" "}
        <br />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
        >
          <option value="Electronic">Electronic</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
        <br />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Createpage;
