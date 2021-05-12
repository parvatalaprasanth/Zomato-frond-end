import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Paymentsuccesss() {
    const history = useHistory();
    function returnhome(){
        history.replace('/orders');
    }
    
    setTimeout(returnhome,5000)

    return (
        <div>
            <center>
            <img src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"/>
            <h1>Food is on the way</h1>
            </center>
        </div>
    )
}

export default Paymentsuccesss
