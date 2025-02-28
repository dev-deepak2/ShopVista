import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import CustomerHome  from './CustomerHome';
import CartPage from "./CartPage";
import OrderPage from "./OrderPage";
import AdminLogin from "./AdminLogin"; 
import AdminDashboard from "./AdminDashboard";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<LoginPage/>}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/customerhome" element={<CustomerHome/>}></Route>
        <Route path="/UserCartPage" element={<CartPage />} ></Route>
        <Route path="/OrderPage" element={<OrderPage />} ></Route>
        <Route path="/adminhome" element={<AdminLogin />} ></Route>
        <Route path="/admindashboard" element={<AdminDashboard />} ></Route>
    </Routes>
  )
}
