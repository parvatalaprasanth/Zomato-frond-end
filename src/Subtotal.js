import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

function Subtotal() {
  const history=useHistory();
  const user="dfdf";
  const basket=[]
  const length=useSelector(state=>state.main.foodbasket.length);
  const foodbasket=useSelector(state=>state.main.foodbasket);


  const getBasketTotal = (foodbasket) => 
  foodbasket?.reduce((amount, item) => Number(item.price) + amount, 0);
  

  const handleUSer=()=>{
    console.log("payment")
  }
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              
              Subtotal ({length} items): <strong>{value}</strong>
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(foodbasket)} 
        displayType={"text"}
        prefix={"₹"}
      />


    </div>
    )
}

export default Subtotal
