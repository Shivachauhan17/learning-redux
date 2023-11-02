import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import { sendCartData } from "./store/cart-slice";

let firstRender=true;

function App() {
const dispatch=useDispatch();

  const notification=useSelector(state=>state.ui.notification)

  const cart=useSelector(state=>state.cart)

  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)
  const cartItems=useSelector((state)=> state.cart.itemsList)

  useEffect(()=>{
    if(firstRender){
      firstRender=false;
      return
    }
    
    dispatch(sendCartData(cart))
    
    
  },[cart])

  console.log(cartItems)


  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;