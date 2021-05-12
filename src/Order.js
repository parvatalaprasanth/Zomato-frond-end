import React from 'react'
import './Order.css'
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from 'moment';
import Orderitem from './Orderitem';

function Order({ order }) {

    console.log(order);
    function totalprice(items){
        return items.reduce( function(a, b){
            return a + Number(b.price);
        }, 0);
    };

    const t=String(new Date(order.time.toLocaleString())).substring(0, 24);
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>hotel name: {order?.hotelname}</p> 
            <p>hotel email: {order?.hotelemail}</p>  
            <p>user email: {order?.useremail}</p> 
            <p>user address: {order?.useraddress}</p> 
            
            <p className="order__id">
            {t}
            </p>

            {order.obj?.map(item => (
                <Orderitem
                    id={item.id}
                    title={item.name}
                    image={item.imageURL}
                    price={item.price}
                    rating={Number(item.rating)}
                    type={item.type}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={totalprice(order.obj)}
                displayType={"text"}
                prefix={"₹"}
            />   
        </div>
    )
}

export default Order