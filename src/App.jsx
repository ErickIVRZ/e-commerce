import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import MyNavBar from './Components/MyNavBar'
import LoadingScreen from './Components/LoadingScreen'
import {useDispatch,useSelector } from "react-redux";
import { getProductsThunk } from './store/slice/Products.slice'
import ProtectedRoutes from './Components/ProtectedRoutes'





function App() {
 
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])

  return (
    
      <HashRouter>
        <MyNavBar/>
        {isLoading && <LoadingScreen/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='login' element={<Login/>}/>


        <Route element={<ProtectedRoutes/>}>
          <Route path='purchases' element={<Purchases/>}/>
          
        </Route>


          
        </Routes>
      </HashRouter>
    
  )
}

export default App
