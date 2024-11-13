import { Link } from 'react-router-dom'

export default function CategoryPage({ products }) {

    return (
        <div>
            {products.map(product => {
                return <div key={product.id} className='card'>

                    <div>
                        <img className='pimage' src={product.image} alt="No image" />
                    </div>
                    <div>
                        <Link to={'product/' + product.id}>
                            <div>{product.title}</div>
                        </Link>
                    </div>
                </div>

            })}
        </div>
    )
}