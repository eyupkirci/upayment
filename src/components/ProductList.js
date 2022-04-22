import React, { useState } from "react";
import Card from "./Card";
import { useFetchData } from "../hooks";

const ProductList = () => {
  const productList = useFetchData("products");
  const categoryList = useFetchData("categories");
  const [value, setValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Product"
          onChange={(e) => setValue(e.target.value)}
        />
        <form>
          <select
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="">All</option>
            {categoryList.map((category, key) => (
              <option key={category.id} value={category.category}>
                {category.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="productlist-container">
        <div className="product-container">
          {productList
            .filter(
              (product) =>
                product.name?.includes(value) ||
                product.description?.includes(value)
            )
            .filter((product) => product.category?.includes(categoryValue))
            .map((product) => (
              <Card key={product.id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
