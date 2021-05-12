import React, { useState,useEffect } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { validationLatitudeLongitude } from "validation-latitude-longitude";
import axios from './axios';
import {useSelector,useDispatch} from 'react-redux';
import {user,hotelowner,currentuser} from './action/index';
import geolocation from 'geolocation';


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address,setAddress] = useState('')
    const [longitude,setLongitude] = useState('')
    const [latitude,setLatitude] = useState('')
    const dispatch=useDispatch();
    
    const presentuser=useSelector(state=>state.main.curentuser);
    if(presentuser){
        history.replace('/home');
    }

    useEffect(() => {
        geolocation.getCurrentPosition(function (err, position) {
            if (err) throw err
            setLatitude(position.coords.latitude.toFixed(2));
            setLongitude(position.coords.longitude.toFixed(2));
          })
    }, []);
    

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
        if(!validationLatitudeLongitude.latLong(latitude, longitude)){
            alert("enter valid latitude and longitude");
            return;
        }
        if(address.length<3){
            alert("name more then 3");
            return;
        }
        axios.post('/createuser',{
            email:email,
            password:password,
            address:address,
            longitude:longitude,
            latitude:latitude
        }).then(function (response) {
            if(response.data=="fail"){
                alert("already exists please login");
            }
            else{
                console.log(response.data)
                const obj={email:email,
                    password:password,
                    address:address,
                    longitude:longitude,
                    latitude:latitude}
                dispatch(user(obj));
                dispatch(currentuser(obj));
                dispatch(hotelowner(null));
                setEmail("");
                setPassword("");
                setLatitude("");
                setLatitude("");
                setAddress("");
                history.replace('/home');
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
                <h1>Register</h1>

                <form>
                <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Address</h5>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)} />

                    <h5>Latitude</h5>
                    <input type='number' value={latitude} onChange={e => setLatitude(e.target.value)} />

                    <h5>Longitude</h5>
                    <input type='number' value={longitude} onChange={e => setLongitude(e.target.value)} />


                    <button onClick={register} className='login__registerButton'>Create your Zomato Account</button>
                </form>

                

                
            </div>
        </div>
    )
}

export default Register