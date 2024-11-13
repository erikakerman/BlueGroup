import { useParams } from "react-router-dom";
import data from "../../data/Products.json";
import "./ProductPage.css";

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id);

  function getProductById(id) {
    const res = data.filter((product) => product.id == id);

    if (res.length > 0) {
      return res[0];
    }

    return null;
  }

  return (
    <div className="product-page">
      {product !== null ? (
        <div className="product-container">
          <div className="left-side">
            <img className="pimage" src={product.image} alt="No image" />
          </div>
          <div className="right-side">Right side content here</div>
        </div>
      ) : (
        /*
        <div>
          <div>{product.title}</div>
          <div>
            <img className="pimage" src={product.image} alt="No image" />
          </div>
          <div>{product.description}</div>
        </div>
      
        
        */

        "Product does not exist."
      )}
    </div>
  );
}
