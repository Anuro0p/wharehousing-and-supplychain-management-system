import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './features/products/products.feature';
import Wharehouse from './features/wharehouse/wharehouse.feature';
import Home from './pages/home/home.page';
import SignIn from './pages/sign-in/sign-in.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='wharehouse' element={<Wharehouse />} />
        <Route path='products' element={<Products />} />
      </Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
