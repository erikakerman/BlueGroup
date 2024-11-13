import { Link, useLoaderData } from 'react-router-dom'
import "../../css/CategoryPage.css";

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
                        <button>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
