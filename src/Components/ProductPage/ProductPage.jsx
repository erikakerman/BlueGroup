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

  const ProductTitle = ({ title }) => {
    return <h1 className="product-title">{title}</h1>;
  };

  const ProductPrice = ({ price }) => {
    return <div className="product-price">{price},00 kr.</div>;
  };

  const ColorSelection = ({ imageUrl }) => {
    return (
      <div className="color-selection">
        <p className="color-label">FÄRG: Svart</p>
        <div className="color-thumbnail">
          <img src={imageUrl} alt="Black color thumbnail" />
        </div>
      </div>
    );
  };

  return (
    <div className="product-page">
      {product !== null ? (
        <div className="product-container">
          <div className="left-side">
            <img className="pimage" src={product.image} alt="No image" />
          </div>
          <div className="right-side">
            <ProductTitle title={product.title} />
            <ProductPrice price={product.price} />
            <ColorSelection imageUrl={product.image} />
          </div>
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
