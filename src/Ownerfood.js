import React from 'react';
import './CheckoutProduct.css'
import { Link } from "react-router-dom";

function Ownerfood({ id, image, title, price, rating, hideButton ,remove ,type}) {
    const basket=[]
    const user="gdg"

    const removeFromBasket = () => {
        // remove the item from the basket
        
    }

    const soloProduct=()=>{
        
      }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__price">
                    {type}
                </p>
                <div className="checkoutProduct__rating">
                    {Array(Number(rating))
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                    {Array(5-rating)
                        .fill()
                        .map((_, i) => (
                        <p>✰</p>
                        ))}
                </div>
                
                {!hideButton && (
                    <button onClick={()=>{remove(title)}}>Remove</button>
                )}
            </div>
        </div>
    )
}

export default Ownerfood