import React, { useState, useEffect } from 'react';
import './Restarent.css';
import Subtotal from './Subtotal';
import Food from './Food';
import { Link } from "react-router-dom";
import Slides from './Slides';
import GoogleMapReact from 'google-map-react';
import Map from './Map';
import {useSelector,useDispatch} from 'react-redux';
import { hotelist } from './action';
import axios from './axios';
import {emptybasket} from './action/index';


function Restarent() {

  const user="dgdg";
  const [basket,setBasket]=useState([]);
  const dispatch=useDispatch();

  const hotel=useSelector(state=>state.main.hotel);

  useEffect(() => {
    //dispatch(emptybasket(1))
    axios.get('/foodlist?email='+hotel.email, {
        params: {
          email:hotel.email
        }
      }).then(function (response) {
          if(response.data!="fail"){
            setBasket(response.data);
          }
        })
}, []);

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
    return (
        <div className="checkout">
        
      <div className="checkout__left">
        <div
          className="checkout__ad" >
          
          <Map lat= {Number(hotel.latitude)}  lng={ Number(hotel.longitude)}/>
        </div>
        <h1 className="checkout__title">Restarent {hotel.name}</h1>
        <div className="checkoutProduct__rating">
                    {Array(Number(hotel.rating))
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                    {Array(5-hotel.rating)
                        .fill()
                        .map((_, i) => (
                        <p>✰</p>
                        ))}
                </div>
        <h2 className="checkout__title">Order Your Food</h2>
        {basket.map(item => (
            <Food
              id={item.id}
              title={item.name}
              image={item.imageURL}
              price={item.price}
              rating={Number(item.rating)}
              type={item.type}
              obj={item}
            />
          ))}
        </div>
        <div className="checkout__right">
            <Subtotal/>
      </div>
        </div>
    )
}

export default Restarent
