import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();

  return (
    <span
      type="button"
      className="addbutton"
      onClick={() => {
        navigate("/create");
      }}
    >
      +
    </span>
  );
};

export default AddButton;
