import React from 'react'
import './product.css'

function getRating(numRating) {
    const rating = []
    const propsRating = numRating;
    for (let a = 0; a < 5; a++) {
        if (a < propsRating) {
            rating.push(<span key={makeid(10)} className="fa fa-star checked"></span>)
        }
        else {
            rating.push(<span key={makeid(10)} className="fa fa-star"></span>)
        }
    }
    return rating
}


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.image} className='image-container' alt='cantload' />
            <div className='title-container'>
                <a href='#' className='title'>{props.title}</a>
            </div>
            <p>Price: {props.price} ETB</p>
            <div className='rating'>{getRating(4)}</div>
        </div>
    )
}

export default Product
