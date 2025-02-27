import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import './card.css'
const data = [
    {
      id: 1,
      name: "Seventeen Lightstick Ver 3",
      price: 850000,
      pict: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lowk7j361xx31b",
      desc: "price includes tax",
    },
    {
      id: 2,
      name: "Seventeen Lightstick Ver 2",
      price: 650000,
      pict: "https://i.ebayimg.com/images/g/mrYAAOSwsJFkNmM0/s-l1200.jpg",
      desc: "price include tax",
    },
    {
      id: 3,
      name: "Seventeen Lightstick Ver 1",
      price: 450000,
      pict: "https://images.tokopedia.net/img/cache/700/product-1/2018/2/5/0/0_281bc8d0-99c0-400b-8173-5f12755bccd0_800_800.jpg",
      desc: "price include tax",
    },{
      id: 4,
      name: "Seventeen Lightstick Shining Diamond",
      price: 100000,
      pict: "https://i.pinimg.com/originals/15/5c/bf/155cbfc5fd0ffa2a00d15a48db65b626.jpg",
      desc: "price include tax",
    }
  ];
  
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
  