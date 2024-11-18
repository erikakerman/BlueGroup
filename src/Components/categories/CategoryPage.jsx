import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import "../../css/CategoryPage.css";
import { FaShoppingCart } from 'react-icons/fa';
  export default function CategoryPage() {
    const products = useLoaderData();
    const [filteredItems , setFilteredItems] = useState(products); // State to track selected value
 
    const handleChange = (event) => {
        let filteredProd ;

       if(event.target.value == "desc")
        //filteredProd =  products.filter((prod)=> prod.price > 100) 
       filteredProd = products.sort((a,b)=> b.price - a.price)
    else if(event.target.value == "asc")
        //filteredProd = products.filter((prod) => prod.price < 100)
    filteredProd = products.sort((a,b)=> a.price - b.price)

    else 
       filteredProd = products
     
       console.log(filteredProd)
       setFilteredItems(filteredProd); // Update state on selection

    };

    return (
        <>
        <div className="filterSide">
            <select className='dropdownfilter'   onChange={handleChange}>
                <option value="">-- Sort By Price --</option> {/* Placeholder */}
                <option value="asc">Lowest Price</option>
                <option value="desc">Highest Price</option>
            </select>

        </div>  
        
        <div className="Products">
            {filteredItems.map((product) => (
                <div key={product.id} className="card">
                 <Link to={"product/" + product.id}>   
                 <div className="img">
                    <img
                        className="pimage"
                        src={product.image} // Use processed image or fallback to original
                        alt="No image"
                    />
                    </div> 
                    </Link>
                    <div className="infoDate">
                        <Link to={"product/" + product.id}>
                            <div className="title">{product.title}</div>
                            <div className="price">${product.price}</div>
                        </Link>
                    </div>
                    <div className="BuyButton">
                        <button>
                            <FaShoppingCart style={{ marginRight: '8px' , fontSize:'13px' }} />
                             Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
