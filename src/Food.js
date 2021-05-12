import React from 'react';
import './CheckoutProduct.css'
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {addfood} from './action/index';


function Food({ id, image, title, price, rating, hideButton,type,obj }) {
    const basket=[]
    const user="gdg";
    const dispatch=useDispatch();

    const AddtoBasket = () => {
        
        dispatch(addfood(obj))
        
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
                    <button onClick={AddtoBasket}>ADD to Basket</button>
                )}
            </div>
        </div>
    )
}

export default Food