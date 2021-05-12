import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Food from './Food';
import Paymentfood from './Paymentfood';
import {useSelector,useDispatch} from 'react-redux';
import { emptybasket, hotel} from './action';
import axios from './axios';


function Payment() {
    const history = useHistory();
    const user=useSelector(state=>state.main.user);
    const basket=useSelector(state=>state.main.foodbasket);
    const hotellist=useSelector(state=>state.main.hotellist);
    const dispatch=useDispatch();
    if(basket.length===0){
        
        return(
            
            <div>
                <center>
                <img src="https://www.nicepng.com/png/detail/322-3224210_your-cart-is-currently-empty-empty-shopping-cart.png"/>
                </center>
            </div>
        )
    }
    var restaurent=null;
    for(let i=0;i<hotellist.length;i++){
        if(hotellist[i].email==basket[0].email){
            restaurent=hotellist[i];
            break
        }
    }

   
    if(!user){
        history.replace('/home');
        return
      }
      

   

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
    }

    function buyfood(e){
        e.preventDefault()
        console.log("buy");
        axios.post('/order',{
            useremail:user.email,
            useraddress:user.address,
            hotelemail:restaurent.email,
            hotelname:restaurent.name,
            time:new Date(),
            obj:basket
        }).then(function (response) {
            dispatch(emptybasket(null))
            history.replace('/paymentsuccesss');
          }).catch(err => {
            // what now?
            history.replace('/paymentfail');
        })
    }

    const getBasketTotal = (foodbasket) => 
    foodbasket?.reduce((amount, item) => Number(item.price) + amount, 0);
    

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>{user?.address}</p>
                        
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Restaurant Details</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{restaurent?.name}</p>
                        <p>{restaurent?.email}</p>
                        
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <Paymentfood
                                id={item.id}
                                title={item.name}
                                image={item.imageURL}
                                price={item.price}
                                type={item.type}
                                rating={Number(item.rating)}
                                obj={item}
                            />
                        ))}
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={buyfood}>
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        // value={getBasketTotal(basket)}
                                         value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        prefix={"₹"}
                                    />
                                    <button  >
                                        <span>Buy Now</span>
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment