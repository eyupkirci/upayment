import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detailpage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="detail-image-container">
          <img
            className="detail-image"
            src={state.product.avatar}
            alt={state.product.name}
          />
        </div>

        <div className="detail-text-container">
          <h2 className="detail-product-name">{state.product.name}</h2>
          <p className="">$ {state.product.price}</p>
        </div>
      </div>
      <hr />
      <div className="description">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
          tellus eu arcu iaculis, efficitur venenatis dolor sagittis. Mauris
          tempus molestie bibendum. Ut ut cursus nunc. Cras at urna at eros
          volutpat viverra. Phasellus scelerisque ipsum a libero eleifend
          cursus. Praesent a diam sapien. Fusce rutrum velit at rhoncus
          lobortis. Fusce porta ullamcorper est, a posuere metus porta id.
          Aenean posuere molestie fermentum. Morbi vel consectetur leo, et
          pellentesque nisi. Duis pellentesque blandit mi id ultrices. Donec
          interdum enim sem, non volutpat lectus mollis quis. Sed aliquet
          iaculis leo, eget tempus tellus cursus vitae. <br />
          Nunc fringilla elementum libero, vel ornare neque sollicitudin vel.
          Donec quam ligula, fermentum sagittis neque ut, porta faucibus nunc.
          Integer eu aliquam dolor, ut mollis nulla. Pellentesque at ligula a
          metus facilisis tempus. Vestibulum lacinia molestie dictum. <br />
          Integer sagittis ornare finibus. Mauris sagittis placerat elementum.
          Donec quis odio lobortis, elementum est a, dictum tellus. Sed diam
          ligula, iaculis sed nunc at, eleifend rutrum lacus. Sed mattis est
          quis turpis cursus, nec volutpat turpis pulvinar. Nullam quis justo
          pellentesque, tincidunt lorem a, tempor justo. Pellentesque commodo,
          elit nec sagittis maximus, ipsum sem vulputate tortor, non iaculis
          nisl neque vel ex. <br />
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        GO BACK
      </button>
    </div>
  );
};

export default Detailpage;
