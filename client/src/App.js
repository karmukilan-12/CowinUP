import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Slot from './Components/Slot';
import SlotReg from './Components/SlotReg';
import Login from './Components/Admin/Login';
import Centers from './Components/Admin/Centers';
import AddCenter from './Components/Admin/AddCenter';
import UpdateCenter from './Components/Admin/UpdateCenter';
const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/slot" element={<Slot/>} /> 
        <Route path="*" element={<Home/>} />
        <Route path="/slotreg" element={<SlotReg />} />
        <Route path='/admin' element={<Login />} />
        <Route path='/center' element={<Centers />} />
        <Route path = '/add' element={<AddCenter />} />
        <Route path="/update/:id" element={<UpdateCenter />} />

      </Routes>
    </BrowserRouter>
  
}

export default App
