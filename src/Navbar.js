import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {user,hotelowner,currentuser} from './action/index';




function Navbar() {

    //const user={email:"shdjs@skjfsj.com"};
    const presentuser=useSelector(state=>state.main.curentuser);
    const owner=useSelector(state=>state.main.hotelowner);
    const customer=useSelector(state=>state.main.user);
    const foodbasket=useSelector(state=>state.main.foodbasket.length);
    const basket=[3,2];
    const show=false;
    const dispatch=useDispatch();
    const history = useHistory();
    console.log(foodbasket);

    function signbutton(){
      if(presentuser){
        dispatch(hotelowner(null));
        dispatch(currentuser(null));
        dispatch(user(null));
        history.replace('/home');
      }
      else{
        history.replace('/login');
      }
   }

   function gotopayment(){
      if(owner){
        alert("only for customers");
        return
      }
      if(!customer){
        alert("please login")
        return
      }
      if(foodbasket===0){
        return;
      }
      history.replace('/payment');
   }

   function orders(){
     if(!presentuser){
       alert("Please login");
     }
     else{
      history.replace('/orders');
     }
   }

    return (
        <div className="header">
        <Link to="/">
            <img
            className="header__logo"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            />
        </Link>
            <div className="header__search" >
            
          
            <input className="header__searchInput" type="text" placeholder="by Parvatala Prasanth" />
            <button className="header__button" onClick={()=>{console.log("click")}} >Search</button>
            </div>
            <div className="header__nav">
            <div className="header__option" onClick={signbutton}>
            <span className="header__optionLineOne">Hello {presentuser?presentuser.email.match(/^([^@]*)@/)[1] :"Guest"}</span>
            <span className="header__optionLineTwo">{presentuser?'Sign Out' :"sign in"}</span>
          </div>
          <div  className="header__option" onClick={orders}>
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option" onClick={gotopayment}>
            <span className="header__optionLineOne">Cart</span>
            <span className="header__optionLineTwo">{foodbasket}</span>
          </div>
            </div>
        </div>
    )
}

export default Navbar
