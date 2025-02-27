import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import './card.css'

const data = [{
    id : 1,
    name: "Spill The Feels",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/49966639cca063eb97370281f942b332.png?w=720&q=95",
    desc: "price include tax",
    release: "October 2024"
}, ,{
    id : 2,
    name: "17 is Right",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/62863df3a8dc36afddbb76abedafea47.png?w=720&q=95",
    desc: "price include tax",
    release: " April 2024"
}, {
    id : 3,
    name: "Seventeenth Heaven",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/16e8ffc939c19d7586b9920f81fe1b5a.png?w=720&q=95",
    desc: "price include tax",
    release: "October 2023"
}, {
    id: 4,
    name: "FML",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/094bd3b712012b5735bd7df781c47866.png?w=720&q=95",
    desc: "price include tax",
    release: "April 2023"
}, {
    id : 5,
    name: "Sector 17",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/82aa017d62b41f68756052075cbdcf0e.png?w=720&q=95",
    desc: "price include tax",
    release: "October 2022"
}, {
    id : 6,
    name: "Face The Sun",
    price: 250000,
    pict: "https://cdn-contents.weverseshop.io/public/shop/620d5fbe6b723be1ea14ffe7d312e026.png?w=720&q=95",
    desc: "price include tax",
    release: "26 May 2015"
}];

const ProductCard = ({ product, addToCart, buyNow }) => {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={product.pict} height={160} alt={product.name} />
        </Card.Section>
  
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{product.name}</Text>
          <Badge color="pink" variant="light">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
          </Badge>
        </Group>
  
        <Text size="sm" color="dimmed">
          {product.desc}
        </Text>
  
        <Button
    fullWidth
    mt="md"
    radius="md"
    style={{ 
      backgroundColor: "#87CEFA",  
      opacity: "0.5",  
      color: "#004080", 
      fontWeight: "600"
    }}
    onClick={() => addToCart(product)}
  >
    Add to Cart
  </Button>
  
  <Button
    fullWidth
    mt="md"
    radius="md"
    style={{ 
      backgroundColor: "#FFC0CB",  
      opacity: "0.5",  
      color: "#800040", 
      fontWeight: "600" 
    }}
    onClick={() => buyNow(product)}
  >
    Payment Now
  </Button>
  
      </Card>
    );
  };
  
  const ProductList = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    };
  
    const buyNow = (product) => {
      navigate('/checkout', { state: { cart: [product] } });
    };
  
    return (
      <Grid gutter="md" className='product-list'>
        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'minmax(250px, auto)',
            gap: '20px',
            padding: '20px',
            overflowX: 'auto'
          }}
        >
          {data.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} buyNow={buyNow} />
          ))}
        </div>
      </Grid>
    );
  };
  
  export default ProductList;
  