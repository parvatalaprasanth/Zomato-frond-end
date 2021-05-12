import React from 'react';
import './CheckoutProduct.css'
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {removefood} from './action/index';

function Paymentfood({ id, image, title, price,type, rating,obj, hideButton }) {
    const basket=[]
    const user="gdg"
    const dispatch=useDispatch();
    const removeFromBasket = () => {
        dispatch(removefood(obj))
        
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
                    <button onClick={removeFromBasket}>Remove</button>
                )}
            </div>
        </div>
    )
}

export default Paymentfood