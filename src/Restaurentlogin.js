import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import axios from './axios';
import {useSelector,useDispatch} from 'react-redux';
import {user,hotelowner,currentuser} from './action/index';


function Restaurentlogin() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();

    const presentuser=useSelector(state=>state.main.curentuser);
    if(presentuser){
        history.replace('/home');
    }


    const register = e => {
        e.preventDefault()
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
        alert("enter proper email");
        return;
        }
        if(password.length<6){
            alert("password should be more then 6 letters");
            return;
        }
        axios.get('/gethotel?email='+email+'&password='+password, {
            params: {
              email:email,
              password:password
            }
          }).then(function (response) {
                if(response.data=='fail'){
                    alert("invalid email or password");
                }
                else
                {
                    console.log(response.data[0].email);
                    dispatch(hotelowner(response.data[0]));
                    dispatch(currentuser(response.data[0]));
                    dispatch(user(null));
                    setEmail("");
                    setPassword("");
                    history.replace('/restarentowner')
                }
            })
    }

    return (
        <div className='login'>
            
                <img
                    className="login__logo"
                    src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
                />
            

            <div className='login__container'>
                <h1>Restarent Login</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={register} className='login__signInButton'>Sign In</button>
                </form>

                

                
            </div>
        </div>
    )
}

export default Restaurentlogin