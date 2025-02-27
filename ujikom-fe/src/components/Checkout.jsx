import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Text, Button } from '@mantine/core';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(location.state?.cart || storedCart);
  }, [location.state]);

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '20px' }}>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <Text>No items in the cart.</Text>
      ) : (
        <>
          {cart.map((item, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder mb="md">
              <Text weight={500}>{item.name}</Text>
              <Text color="dimmed">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
              </Text>
            </Card>
          ))}
          <Text weight={700} size="lg" mt="md">
            Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}
          </Text>
          <Button color="#F7CAC9" fullWidth mt="md" onClick={() => navigate('/payment')}>
            Proceed to Payment
          </Button>
          <Button color="#92A8D1" fullWidth mt="md" radius="md" onClick={() => alert('Payment canceled!')}>
            Cancel Payment
          </Button>
        </>
      )}
    </div>
  );
};

export default Checkout;
