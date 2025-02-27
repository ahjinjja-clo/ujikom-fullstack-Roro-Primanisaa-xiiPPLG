import React from 'react'
import Navbar from './Navbar'
import Card from './Card.jsx'
import Card2 from './Card2.jsx'
import Card3 from './Card-3.jsx'
import Card4 from './Card4.jsx'

const Mall = () => {
  return (
    <div>
        <Navbar/>
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
                    <div className="miniteen">
                      <p className="al">Miniteen Dolls</p>
                      <Card4/>
                    </div>
        </section>
    </div>
  )
}

export default Mall