import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Categories from './components/Categories'
import Coupons from './components/Coupons'
import Customers from './components/Customers'
import Inbox from './components/Inbox'
import Products from './components/Products'
import Reports from './components/Reports'
import Orders from './components/Orders'
import LoginPage from './components/LoginPage'
import CategoryImageCard from './components/CategoryImageCard'
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RegisterPage from './components/RegistrerPage'

const App = () => (
    <BrowserRouter>
    <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path='/sign_up' element={<RegisterPage/>} />
      <Route exact path="/categories" element={<Categories/>}/>
      <Route exact path="/category/:categoryName" element={<CategoryImageCard/>}/>
      <Route exact path="/coupons" element={<Coupons/>}/>
      <Route exact path="/customers" element={<Customers/>}/>
      <Route exact path="/inbox" element={<Inbox/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/reports" element={<Reports/>}/>
      <Route exact path="/orders" element={<Orders/>}/>
      <Route exact path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )


export default App