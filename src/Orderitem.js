import React from 'react';
import './Orderitem.css'
import { Link } from "react-router-dom";

function Orderitem({ id, image, title, price, rating, hideButton,type }) {


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
                    
                    <strong>{type}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
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
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default Orderitem