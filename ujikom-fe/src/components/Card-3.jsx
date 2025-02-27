import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';

const data = [
  {
    id: 1,
    name: "Seventeen Right Here World Tour in Japan live viewing",
    price: 600000,
    pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6wk1rDC5AOCT2ZSVDqwR3Ik1hDzgqhrw-A&s",
    desc: "price include tax",
    release: 2024
  },
  {
    id: 2,
    name: "Seventeen tour Follow Again to Cinema",
    price: 180000,
    pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQQOx-rR8A0Nm9OoJ9QMsWo3XR9UmQ42r9A&s",
    desc: "price include tax",
    release: 2024
  }, {
        id: 3,
        name: "Seventeen Right Here World Tour in Goyang VOD",
        price: 700000,
        pict: "https://res.klook.com/image/upload/x_574,y_0,w_771,h_1080,c_crop/c_scale,w_360/v1722924926/events_admin/wtt4s7ozajk5axe85yhr.jpg",
        desc: "price include tax",
        release: 2024,
        trailer: ""
    }, {
        id: 4,
        name: "Seventeen Power of Love VOD ",
        price: 180000,
        pict: "https://studio.mrngroup.co/storage/app/media/Prambors/Editorial/SEVENTEEN-20220323142459.jpeg?tr=w-600",
        desc: "price include tax",
        release: 2021,
        trailer: ""
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
