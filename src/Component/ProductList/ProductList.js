import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalContext'
import Product from '../Product/Product'
import './productlist.css'

function ProductList() {

    const [globalState] = useContext(GlobalContext)
    console.log('globalState', globalState);
    

    return (
        <div className='product-list'>
            {                
                globalState.products.map(product => (<Product key={product._id} {...product} />))
            }
        </div>
    )
}

export default ProductList
