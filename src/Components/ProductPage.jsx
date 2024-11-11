import { useParams } from 'react-router-dom'
import data from '../data/Products.json'

export default function ProductPage() {
    const params = useParams()
    const product = getProductById(params.id)

    function getProductById(id) {
        const res = data.filter(product => product.id == id)

        if (res.length > 0) {
            return res[0]
        }

        return null
    }

    return (
        <div>
            {
                (
                    product !== null
                        ?
                        (
                            <div>
                                <div>{product.title}</div>
                                <div>
                                    <img className='pimage' src={product.image} alt="No image" />
                                </div>
                            </div >
                        )
                        :
                        'Product does not exist.'
                )
            }

        </div>
    )
}
