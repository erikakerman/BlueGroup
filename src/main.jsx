import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './css/main.css'

import Layout from './Layout/Layout'
import Home from './Components/Home'
import CategoryPage from './Components/categories/CategoryPage'
import ProductPage from "./Components/ProductPage/ProductPage";
import data from './data/Products.json';

const productsForWomen = getProductsForCategory("women");
const productsForMen = getProductsForCategory("men");
const productsForKids = getProductsForCategory("kids");
const womenjeans = getProductsByCategoryAndSubCategory("women", "jeans");
const womenshoes = getProductsByCategoryAndSubCategory("women", "shoes");
const womenbags = getProductsByCategoryAndSubCategory("women", "bags");
const menjeans = getProductsByCategoryAndSubCategory("men", "jeans");
const menshoes = getProductsByCategoryAndSubCategory("men", "shoes");
const mensocks = getProductsByCategoryAndSubCategory("men", "socks");
const kidspants = getProductsByCategoryAndSubCategory("kids", "pants");
const kidshoes = getProductsByCategoryAndSubCategory("kids", "shoes");
const kidtoys = getProductsByCategoryAndSubCategory("kids", "toys");

function getProductsForCategory(category) {
  return data.filter(
       (outprod) => outprod.category === category
    );
}

function getProductsByCategoryAndSubCategory(category, subCategory) {
  return data.filter(
    (p) => p.category === category && p.subCategory === subCategory
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "women",
        element: <CategoryPage />
        ,
        loader: async () => {
          return productsForWomen;
        },
      },
      {
        path: "women/product/:id",
        element: <ProductPage />,
      },
      {
        path: "women/:subcategory",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          if (params.subcategory === "jeans") return womenjeans;
          if (params.subcategory === "shoes") return womenshoes;
           return womenbags;
        },
      },
      {
        path: "women/:subcategory/product/:id",
        element: <ProductPage />,
      },
      {
        path: "men",
        element: <CategoryPage />,
        loader: async () => {
          return productsForMen;
        },
      },
      {
        path: "men/product/:id",
        element: <ProductPage />,
      },
      {
        path: "men/:subcategory/product/:id",
        element: <ProductPage />,
      },
      {
        path: "men/:subcategory",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          if (params.subcategory === "jeans") return menjeans;
          if (params.subcategory === "shoes") return menshoes;

          return mensocks;
        },
      },
      {
        path: "kids",
        element: <CategoryPage />,
        loader: async () => {
          return productsForKids;
        },
      },
      {
        path: "kids/product/:id",
        element: <ProductPage />,
      },
      {
        path: "kids/:subcategory",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          if (params.subcategory === "pants") return kidspants;
          if (params.subcategory === "shoes") return kidshoes;

          return kidtoys;
        },
      },
      {
        path: "kids/:subcategory/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
