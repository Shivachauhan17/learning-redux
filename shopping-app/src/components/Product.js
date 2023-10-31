import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  

  const dispatch=useDispatch()
  
  const addtoCart=()=>{
      dispatch(cartActions.addToCart({
        name,id,price,
      }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addtoCart}>Add to cart</button>
    </div>
  );
};

export default Product;