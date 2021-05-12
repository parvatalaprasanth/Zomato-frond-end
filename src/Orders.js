import {useSelector,useDispatch} from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Orders.css';
import Order from './Order';

function Orders() {
    const presentuser=useSelector(state=>state.main.curentuser);
    const owner=useSelector(state=>state.main.hotelowner);
    const customer=useSelector(state=>state.main.user);
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    if(!presentuser){
        history.replace('/home');
    }

    useEffect(() => {
        if(owner){
            console.log("owner");
            axios.get('/hotelorderlist?hotelemail='+owner.email, {
                params: {
                    hotelemail:owner.email
                }
              }).then(function (response) {
                  if(response.data!="fail"){
                    setOrders(response.data.reverse());
                  }
                })
        }
        if(customer){
            console.log("customer");
            axios.get('/userorderlist?useremail='+customer.email, {
                params: {
                    useremail:customer.email
                }
              }).then(function (response) {
                  if(response.data!="fail"){
                    setOrders(response.data.reverse());
                  }
                })
        }
    }, []);

    console.log(orders)

    return (
        <>
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Orders
