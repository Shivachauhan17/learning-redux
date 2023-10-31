import React from "react";
import "./Cart.css";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const quantity = useSelector((state)=>state.cart.totalQuantity);
  const dispatch=useDispatch();

  const showMyCart=()=>{
    dispatch(cartActions.showCart())
  }

  return (
    <div className="cartIcon">
      <h3 onClick={showMyCart} >Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;