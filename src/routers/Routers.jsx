import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home/Home"
import Shop from "../pages/shop/Shop"
import ProductDetail from "../pages/productDetail/ProductDetail"
import Cart from "../pages/cart/Cart"
import Checkout from "../pages/checkout/Checkout"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
const Routers = () => {
  return (
    <Routes path="/" element={<Navigate to="/home"/>}>
        <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default Routers