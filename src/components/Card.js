import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (product) => {
  const navigate = useNavigate();

  const goToCardDetails = (product) => {
    navigate("/detail", { state: { product } });
  };

  return (
    <div className="card" key={product.id}>
      <div className="card-container">
        <div className="card-image-container">
          <img
            className="card-image"
            src={product.avatar}
            alt={product.name}
            onClick={() => {
              goToCardDetails(product);
            }}
          />
        </div>
        <p className="card-title">{product.name}</p>
        <p className="card-price">$ {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
