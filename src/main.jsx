import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './css/main.css'
import Layout from './Layout/Layout'
import Home from './Components/Home'
import CategoryPage from './Components/categories/CategoryPage'
import ProductPage from './Components/ProductPage'
import data from './data/Products.json';
 
function getProductsForCategory(category) {
  return data.filter(product => product.category === category)
}

const productsForWomen = getProductsForCategory('women')
const productsForMen = getProductsForCategory('men')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'women',
        element: <CategoryPage products={productsForWomen} />,
      },
      {
        path: 'women/product/:id',
        element: <ProductPage />,
      },
      {
        path: 'men',
        element: <CategoryPage products={productsForMen} />,
      },
      {
        path: 'men/product/:id',
        element: <ProductPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
