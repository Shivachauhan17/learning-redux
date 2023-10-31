import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)
  const cartItems=useSelector((state)=> state.cart.itemsList)


  console.log(cartItems)


  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;