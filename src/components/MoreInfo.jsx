import React from "react";

const MoreInfo = (props) => {
  return (
    <div className="infodiv">
      <div className="productDetails">
        <div className="top">
          <p>
            Cart: {props.cartCount} items | Total: $
            {props.totalAmount.toFixed(2)}
          </p>

          <div className="closeButton">
            <span onClick={props.close}>x</span>
          </div>
        </div>

        <div className="imageAndcontent">
          <div className="infocontent">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <p>Rating: {props.data.rating}</p>
            <p>
              <b>Price: ${props.data.price}</b>
            </p>
            <button onClick={props.add}>Add to cart</button>
          </div>
          <div className="Imagesdiv">
            <img src={props.data.images[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
