import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Checkout from '../pages/Checkout'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='checkout' element={<Checkout />} />
        </Routes>
    )
}

export default Routers