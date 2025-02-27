import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Import global styles Mantine

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
console.log(document.getElementById('root'));

