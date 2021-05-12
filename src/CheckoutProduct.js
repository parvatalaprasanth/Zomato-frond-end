import React, { useState,useEffect } from 'react';
import './CheckoutProduct.css';
import { Link, useHistory } from "react-router-dom";
import {hotel} from './action/index';
import {useSelector,useDispatch} from 'react-redux';
import geolocation from 'geolocation';
import dist  from 'geo-distance-js';
import calculate from 'geodistance-super';



function CheckoutProduct({ id, image, title, type, rating, hideButton,obj }) {

    const[distance,setDistance]=useState(null);
    const dispatch=useDispatch();
    const location=useSelector(state=>state.main.location);
    if(location){
        //console.log(dist.getDistance(latitude, longitude, Number(obj.latitude), Number(obj.longitude)))
       // console.log(location.latitude, location.longitude, Number(obj.latitude), Number(obj.longitude))
        calculate(location.latitude, location.longitude, Number(obj.latitude), Number(obj.longitude), 'km').then(data=>{
            setDistance(Math.ceil(data.number))
            //console.log(Math.ceil(data.number));

      })}
    
    // useEffect(() => {

    //         if(location){
    //         //console.log(dist.getDistance(latitude, longitude, Number(obj.latitude), Number(obj.longitude)))
    //        // console.log(location.latitude, location.longitude, Number(obj.latitude), Number(obj.longitude))
    //         calculate(location.latitude, location.longitude, Number(obj.latitude), Number(obj.longitude), 'km').then(data=>{
    //             setDistance(Math.ceil(data.number))
    //             //console.log(Math.ceil(data.number));

    //       })}
    // }, []);

    

    const visit = () => {
        // remove the item from the basket
        dispatch(hotel(obj))
        
    }

    const soloProduct=()=>{
       
      }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <strong>{type}</strong>
                </p>
                <p className="checkoutProduct__price">
                    <strong>{distance?distance:"unknow"} km away</strong>
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
                <Link to="/restaurent"><button onClick={visit}>Visit</button></Link>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct