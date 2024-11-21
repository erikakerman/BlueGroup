import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import data from './data/Products.json';
import App from './App'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App products={data} />
  </StrictMode>
);
