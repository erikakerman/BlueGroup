import { Link, useLoaderData } from 'react-router-dom'
import "../../css/CategoryPage.css";
import { FaShoppingCart } from 'react-icons/fa';

export default function CategoryPage() {
    const products = useLoaderData();
  
    return (
        <div className="Products">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <div className="img">
                        <Link to={"product/" + product.id}>
                            <img
                                className="pimage"
                                src={ product.image} // Use processed image or fallback to original
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
                        <button>
                            <FaShoppingCart style={{ marginRight: '8px' , fontSize:'13px' }} />
                             Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
