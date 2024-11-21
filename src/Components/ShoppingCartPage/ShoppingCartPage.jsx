import { useNavigate, useOutletContext } from 'react-router-dom'
import './ShoppingCartPage.css'

export default function ShoppingCart() {
  const { productsInShoppingCart, setProductsInShoppingCart, setProductCount } = useOutletContext()
  const navigate = useNavigate();

  const products = [...productsInShoppingCart]
  let total = 0
  let subTotal = 0

  function removeProduct(id) {
    productsInShoppingCart.delete(id)
    setProductsInShoppingCart(prev => prev)
  }

  function handleOnClick() {
    navigate('/')
    navigate(0)
  }

  function increment(id) {
    setProductCount(prev => prev + 1)
    let p = productsInShoppingCart.get(id)
    p.count = p.count + 1

    setProductsInShoppingCart(new Map(productsInShoppingCart))
  }

  function decrement(id) {
    setProductCount(prev => prev - 1)
    let p = productsInShoppingCart.get(id)
    p.count = p.count - 1

    if (p.count == 0)
      productsInShoppingCart.delete(id)

    setProductsInShoppingCart(new Map(productsInShoppingCart))
  }

  if (products.length < 1) {
    return <div className='sc_continue'>
      <h2>Your shopping cart is empty.</h2>
      <button onClick={handleOnClick}>Continue shopping</button>
    </div>
  }

  return (
    <div className='sc_products'>
      {products.map((product, i) => {

        let p = product[1].product
        let eachProductCount = product[1].count

        { subTotal = eachProductCount * p.price }
        { total += subTotal }

        return (
          <div key={i} className='sc_grid3'>

            <div>
              <div className="title">{p.title}</div>
              <img className="sc_image" src={p.image} alt="No image" />
            </div>

            <div className='sc_grid3 sc_controls'>
              <button onClick={() => decrement(p.id)}>-</button>
              <div>{eachProductCount}</div>
              <button onClick={() => increment(p.id)}>+</button>
            </div>

            <div className='sc_grid4'>
              <div className='sc_grid4'>
                <div>${p.price}</div>
                <div className='sc_sprice'>Subtotal: ${Math.round((subTotal + Number.EPSILON) * 100) / 100}</div>
              </div>

              <button onClick={() => {
                removeProduct(p.id)
                setProductCount(prev => prev - eachProductCount)
              }}>Remove</button>

            </div>
          </div>
        )

      })}

      <div className='sc_tprice'>
        Total: ${Math.round((total + Number.EPSILON) * 100) / 100}
      </div>
    </div>
  )
}
