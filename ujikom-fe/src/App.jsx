import React from 'react';
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Bayar from './components/Checkout'
import Checkout from './components/Checkout';
import Mall from './components/Mall';
import Cart from './components/Cart';

function App() {
  console.log("App Loaded!");


  return (
    <>
    <MantineProvider withGlobalStyles withNormalizeCSS>
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path='/Mall' element={<Mall/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
          </Router>
        </MantineProvider>
        </>
  )
}

export default App
