import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory,Redirect } from "react-router-dom";
import { validationLatitudeLongitude } from "validation-latitude-longitude";
import  validateImage  from "image-validator";
import axios from './axios';
import {useSelector,useDispatch} from 'react-redux';
import {user,hotelowner,currentuser} from './action/index';
const isImageURL = require('image-url-validator').default;




function Restarentregister() {
    const history = useHistory();
    const dispatch=useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type,setType] = useState('Veg')
    const [name,setName] = useState('')
    const [longitude,setLongitude] = useState('')
    const [latitude,setLatitude] = useState('')
    const [imageURL,setImageURL] = useState('')

    const presentuser=useSelector(state=>state.main.curentuser);
    if(presentuser){
        history.replace('/home');
    }

    
    function imageExists(image_url){ 
        try{
        var http = new XMLHttpRequest(); 
     
        http.open('HEAD', image_url, false); 
        http.send();   
        return http.status != 404; 
        }
        catch(err) {
           return false
          }
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
        if(!validationLatitudeLongitude.latLong(latitude, longitude)){
            alert("enter valid latitude and longitude");
            return;
        }
        if(!imageExists(imageURL)){
            alert("enter valid png url")
            return;
        }
        if(name.length<3){
            alert("name more then 3");
            return;
        }
        const rating=Math.floor(Math.random() * 5) + 1 
        axios.post('/createhotel',{
            email:email,
            password:password,
            type:type,
            name:name,
            longitude:longitude,
            latitude:latitude,
            imageURL:imageURL,
            rating:rating
        }).then(function (response) {
            if(response.data=="fail"){
                alert("already exists please login");
            }
            else{
                console.log(response.data)
                const obj={email:email,
                    password:password,
                    type:type,
                    name:name,
                    longitude:longitude,
                    latitude:latitude,
                    imageURL:imageURL,
                    rating:rating}
                dispatch(hotelowner(obj));
                dispatch(currentuser(obj));
                dispatch(user(null));
                setEmail("");
                setPassword("");
                setName("");
                setLatitude("");
                setLatitude("");
                setImageURL("");
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
                <h1>Restarent Register</h1>

                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>Latitude</h5>
                    <input type='number' value={latitude} onChange={e => setLatitude(e.target.value)} />

                    <h5>Longitude</h5>
                    <input type='number' value={longitude} onChange={e => setLongitude(e.target.value)} />

                    <h5>Image URL</h5>
                    <input type='text' value={imageURL} onChange={e => setImageURL(e.target.value)} />

                    <h5>Type</h5>
                    <select id = "dropdown" value={type}  onChange={e => setType(e.target.value)}>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>

                    <button type='submit' onClick={register} className='login__signInButton'>Register</button>
                </form>

                

                
            </div>
        </div>
    )
}

export default Restarentregister