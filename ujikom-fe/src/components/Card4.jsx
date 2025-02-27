import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';

const data = [
        {
            id: 1,
            name: "Miniteen Choicherry (S.Coups)",
            price: 150000,
            pict: "https://preview.redd.it/241209-hybe-merch-twitter-update-miniteen-concept-photo-v0-1h23l8ik9r5e1.jpg?width=640&crop=smart&auto=webp&s=8a23bda3251a9a9680aec001a05530b3e93efc5b",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 2,
            name: "Miniteen Doa (DK)",
            price: 150000,
            pict: "https://i.redd.it/241209-hybe-merch-twitter-update-miniteen-concept-photo-v0-7tyyqg4m9r5e1.jpg?width=2500&format=pjpg&auto=webp&s=5f553cf436d34d02526734ebda61b03357e0356f",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 3,
            name: "Miniteen Jjongtoram (Jeonghan)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4tfFuT-HY7999HNr_JW_pyaZMf3PHaUfb-0saTOzphv2kaKHr_YoncZKzrrFEPorWbc&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 4,
            name: "Miniteen Shuasumi (Joshua)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8kSwZdbji2FfJwzxLlehxq2wS8jpW9MptI3biVKeVVExHmt3sej6eqA00_4hI9tYD-0&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 5,
            name: "Miniteen Tamtam (Hoshi)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjiAfwGwT7EyVAZoxi35URjfGp6KPFhHxI5iSrlHaF4tLZ9-5g9hkckdJg4hTegzil04&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 6,
            name: "Miniteen Foxdungee (Wonwoo)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTYhgLS3VVar-spcWItH5voJCW1luDR8hww&s",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 7,
            name: "Miniteen Kimja (Mingyu)",
            price: 150000,
            pict: "https://www.kpopusaonline.com/wp-content/uploads/2024/12/seventeen-kimja-1.png",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 8,
            name: "Miniteen Bboogyuli (Seungkwan)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXZuqrn3x57jg8bMBTxDwqrEo3tPJyAMk9lO39yI6QlfowW-0GwZcfOuXfWDLEvl7jT4&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 9,
            name: "Miniteen Nonver (Vernon)",
            price: 150000,
            pict: "https://static.insales-cdn.com/r/vgR1coNKG1I/rs:fit:1000:0:1/q:100/plain/images/products/1/47/945618991/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-12-12_%D0%B2_6.46.48_PM.png@png",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 10,
            name: "Miniteen Chandalee (Dino)",
            price: 150000,
            pict: "https://i.redd.it/241209-hybe-merch-twitter-update-miniteen-concept-photo-v0-71qcqtkm9r5e1.jpg?width=2500&format=pjpg&auto=webp&s=2db0953f1dd2fcfb77dfa8e6be06f794cf4b71c4",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 11,
            name: "Miniteen Ppyopuli (Woozi)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9a1q8CEy6bp_cOVc0AkAgxU8usxujjr87IbPTg2tR_KzOzqcahnzm7YfWmcEKkTIpkI&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 12,
            name: "Miniteen THEpalee (The8)",
            price: 150000,
            pict: "https://pbs.twimg.com/media/GeV7MR1awAE6yEa.jpg:large",
            desc: "Price includes tax.",
            release: 2024
        },
        {
            id: 13,
            name: "Miniteen OCL (Jun)",
            price: 150000,
            pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfR0FS75F9SDb6trZuqkw9yxqlP-NXX-VOy_k37v56K8Og3ixJ8_4E9wfK-icUBuelgw&usqp=CAU",
            desc: "Price includes tax.",
            release: 2024
        }
]
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