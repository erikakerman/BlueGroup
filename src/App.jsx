import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './Components/Layout/Layout'
import Home from './Components/HomePage/Home'
import CategoryPage from './Components/CategoryPage/CategoryPage'
import ProductPage from "./Components/ProductPage/ProductPage";
import ShoppingCart from "./Components/ShoppingCartPage/ShoppingCartPage";

export default function App({ products }) {
    const [productsInShoppingCart, setProductsInShoppingCart] = useState(new Map())
    const [productCount, setProductCount] = useState(0)

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
        return products.filter(
            (outprod) => outprod.category === category
        );
    }

    function getProductsByCategoryAndSubCategory(category, subCategory) {
        return products.filter(
            (p) => p.category === category && p.subCategory === subCategory
        );
    }

    function setIndividualProductCount(newProduct) {
        let pCount = 1

        if (productsInShoppingCart.get(newProduct.id)) {
            pCount = productsInShoppingCart.get(newProduct.id).count + 1
        }

        const obj = {
            count: pCount,
            product: newProduct
        }

        setProductsInShoppingCart(new Map(productsInShoppingCart.set(newProduct.id, obj)))
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout context={{
                productsInShoppingCart,
                setProductsInShoppingCart,
                productCount,
                setProductCount,
                setIndividualProductCount
            }} />,
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
                {
                    path: "shoppingcart",
                    element: <ShoppingCart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />
}
