import React from 'react'
import CatagoryList from '../CatagoryList/CatagoryList'
import ProductList from '../ProductList/ProductList'
import ProgressBar from '../ProgressBar/ProgressBar'
import './main.css'

function Main({ isLoading }) {

    return (
        <div className='main'>
            <CatagoryList />
            {isLoading ? (
                <div className='loading-place-holder'>
                    <ProgressBar />
                </div>
            ) : (
                    <ProductList />
                )}
        </div>
    )
}

export default Main
