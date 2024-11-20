import { useOutletContext, useParams } from "react-router-dom";
import data from "../../data/Products.json";
import "./ProductPage.css";

export default function ProductPage() {
  const params = useParams();
  const { setProductCount, setIndividualProductCount } = useOutletContext()
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
    return <div className="product-price">{price}kr.</div>;
  };

  const ColorSelection = ({ imageUrl }) => {
    return (
      <div className="color-selection">
        <p className="color-label">FÄRG: </p>
        <div className="color-thumbnail">
          <img src={imageUrl} alt="Black color thumbnail" />
        </div>
      </div>
    );
  };

  const SizeSelection = () => {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    return (
      <div className="size-selection">
        <p className="size-label">VÄLJ STORLEK</p>
        <div className="size-grid">
          {sizes.map((size) => (
            <button key={size} className="size-box">
              {size}
            </button>
          ))}
        </div>
        <a href="#" className="size-guide">
          STORLEKSGUIDE
        </a>
      </div>
    );
  };

  const AddToCartButton = () => {
    return <button onClick={() => {
      setProductCount(prev => prev + 1)
      setIndividualProductCount(product)
    }} className="add-to-cart-button">LÄGG TILL</button>;
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
            <SizeSelection />
            <AddToCartButton />
          </div>
        </div>
      ) : (
        "Product does not exist."
      )}
    </div>
  );
}
