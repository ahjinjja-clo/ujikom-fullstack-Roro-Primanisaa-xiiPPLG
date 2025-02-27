import React, { useState, useEffect } from "react";
import { Card, Button, Text, Image, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Fitur checkout belum tersedia!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <Text>Tidak ada item di keranjang.</Text>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <Card key={index} shadow="sm" padding="lg" style={{ marginBottom: "10px" }}>
              <Group position="apart">
                <Image src={item.image} alt={item.name} width={80} height={80} />
                <div>
                  <Text weight={500}>{item.name}</Text>
                  <Text color="gray">Rp {item.price.toLocaleString()}</Text>
                </div>
                <Button color="red" onClick={() => removeFromCart(index)}>Hapus</Button>
              </Group>
            </Card>
          ))}
          <Button fullWidth mt="md" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      )}
      <Button variant="outline" fullWidth mt="md" onClick={() => navigate("/")}>Kembali ke Toko</Button>
    </div>
  );
};

export default Cart;
