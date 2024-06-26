import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { CourseList } from './components/CourseList'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from './control/cartSlice'

function App() {
  // cart items her değiştiğinde değiş
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  useEffect(()=>{
      dispatch(calculateTotal());
  },[cartItems]);

  return (
    

    <>
      <Navbar />
      <CourseList />
    </>
  )
}

export default App
