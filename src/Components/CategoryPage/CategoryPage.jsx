import { useEffect, useState } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import "./CategoryPage.css";
import { FaShoppingCart } from "react-icons/fa";

export default function CategoryPage() {
  const products = useLoaderData(); // Already filtered by categories/subcategories
  const [filteredItems, setFilteredItems] = useState(products); // Initial state
  const [searchQuery, setSearchQuery] = useState('')
  const { setProductCount, setIndividualProductCount } = useOutletContext()

  // Sync filteredItems with products
  useEffect(() => {
    setFilteredItems(products);
  }, [products]);


  const handleChange = (event) => {
    let sortedProducts;

    if (event.target.value === "desc") {
      sortedProducts = [...filteredItems].sort((a, b) => b.price - a.price);
    } else if (event.target.value === "asc") {
      sortedProducts = [...filteredItems].sort((a, b) => a.price - b.price);
    } else {
      sortedProducts = [...products]; // Reset to the original filtered list
    }

    setFilteredItems(sortedProducts);
  };

  function handleOnQueryChange(e) {
    const sQuery = e.target.value
    setSearchQuery(sQuery)
    setFilteredItems(search(sQuery))
  }

  function search(query) {
    return products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <>
      <div className='grid grid2'>
        <div></div>
        <div className="filterSide">
          <select className="dropdownfilter" onChange={handleChange}>
            <option value="">-- Sort By Price --</option> {/* Placeholder */}
            <option value="asc">&nbsp;Lowest Price</option>
            <option value="desc">&nbsp;Highest Price</option>
          </select>
        </div>

        <div className='search_c'>
          <input value={searchQuery} onChange={handleOnQueryChange} placeholder='Search products' />
        </div>
      </div>

      <div className="Products">
        {filteredItems.map((product) => (
          <div key={product.id} className="card">
            <div>
              <Link to={"product/" + product.id}>
                <img
                  className=""
                  src={product.image} // Use processed image or fallback to original
                  alt="No image"
                />
              </Link>
            </div>
            <div className="infoDate">
              <Link to={"product/" + product.id}>
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
              </Link>
            </div>
            <div className="BuyButton">
              <button onClick={() => {
                setProductCount(prev => prev + 1)
                setIndividualProductCount(product)
              }}>
                <FaShoppingCart />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
