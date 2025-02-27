import React, { useState } from 'react'
import { Container } from '@mantine/core';
import Navbar from './Navbar';
import './dashboard.css';
import Card from '../components/Card.jsx'
import Card2 from '../components/Card2.jsx'
import Card3 from '../components/Card-3.jsx'


const Dashboard = () => {
   const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
  
    const addItem = () => {
      if (input) {
        setItems([...items, input]);
        setInput('');
      }
    };
    console.log("ping")
  return (
    <div>
      <Navbar/>
            <main>
                <section className="featured-products">
                    <p className="feature">Featured Product</p>
                    <div className="lightstick">
                      <p className="ls">Lightstick</p>
                      <Card/>
                    </div>
                    <div className="vod-concerts">
                      <p className="vc">VOD Concerts</p>
                      <Card3/>
                    </div>
                    <div className="album">
                      <p className="al">Album</p>
                      <Card2/>
                    </div>
                </section>
            </main>
            <footer>
                <p>Contact us at: carateeninfo@ecommerce.com</p>
            </footer>
        </div>
  )
}

export default Dashboard