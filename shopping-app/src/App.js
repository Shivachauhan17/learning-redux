import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Notification from "./components/Notification";

function App() {
  const cart=useSelector(state=>state.cart)

  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)
  const cartItems=useSelector((state)=> state.cart.itemsList)

  useEffect(()=>{
    const sendRequest=async()=>{
      const res=await fetch('https://redux-shopping-app-3785e-default-rtdb.firebaseio.com/cartItems.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      })
      const data=await res.json();
    }

    sendRequest();
    
  },[cart])

  console.log(cartItems)


  return (
    <div className="App">
      <Notification type='success' message={'thiis is a dummy message'} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;