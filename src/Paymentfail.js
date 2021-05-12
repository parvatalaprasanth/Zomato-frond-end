import React from 'react';
import { Link, useHistory } from "react-router-dom";



function Paymentfail() {

    
    const history = useHistory();
    function returnhome(){
        history.replace('/home');
    }
    
    setTimeout(returnhome,5000)

    return (
        <div>
            <center>
            <img src="https://www.digitalpaymentguru.com/wp-content/uploads/2019/08/Transaction-Failed.png"/>
            </center>
        </div>
    )
}

export default Paymentfail
