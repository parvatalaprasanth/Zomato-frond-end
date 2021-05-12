import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import axios from './axios';
import {hotelist} from './action/index';
import {useSelector,useDispatch} from 'react-redux';


function Hotels() {

    const dispatch=useDispatch();
    const user={email:"nfidnv@gnkd.com"};
    
    const hotellist=useSelector(state=>state.main.hotellist);

    console.log("working");
    useEffect(() => {
        axios.get('/hotellist', {
        }).then(function (response) {
          if(response.data!="fail"){
              dispatch(hotelist(response.data));
          }
          })
    }, []);
    
    return (
        <div className="checkout">
      <div className="checkout__left">
        <h1 className="checkout__title">Restarents</h1>
        {hotellist.map(item => (
            
            <CheckoutProduct
              id={item.email}
              title={item.name}
              image={item.imageURL}
              type={item.type}
              rating={Number(item.rating)}
              obj={item}
            />
          ))}
        </div>
        <div className="checkout__right">
            
      </div>
        </div>
    )
}

export default Hotels
