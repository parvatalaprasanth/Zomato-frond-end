import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Food from './Food';
import Paymentfood from './Paymentfood'
import {useSelector,useDispatch} from 'react-redux';
import axios from './axios';
import Ownerfood from './Ownerfood';


function Restarentowner() {
    
    const history = useHistory();
    const[basket,setBasket]=useState([])
    const [type,setType] = useState('Veg')
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [imageURL,setImageURL] = useState('')
    const hotelowner=useSelector(state=>state.main.hotelowner);
    if(!hotelowner){
        history.replace('/home');
    }

    useEffect(() => {
        axios.get('/foodlist?email='+hotelowner.email, {
            params: {
              email:hotelowner.email
            }
          }).then(function (response) {
              if(response.data!="fail"){
                setBasket(response.data);}
            })
    }, []);
    
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

    const add = e => {
        e.preventDefault();
        if(name.length<3){
            alert("name more then 3");
            return;
        }
        if(price===0){
            alert("price canot be 0")
            return
        }
        if(!imageExists(imageURL)){
            alert("enter valid png image url")
            return;
        }
        const rating=Math.floor(Math.random() * 5) + 1;
        axios.post('/createfood',{
            email:hotelowner.email,
            type:type,
            name:name,
            imageURL:imageURL,
            rating:rating,
            price:price
        }).then(function (response) {
            if(response.data=="fail"){
                alert("cannot already existed food");
            }
            else{
                setName("");
                setPrice("");
                setImageURL("");
                alert("succussfully added");
                window.location.reload();
            }
          })
    }
    
    function remove(fname){
        axios.delete('/fooddelete',{
            data:{email:hotelowner.email,
            name:fname}
        }).then(function (response) {
            window.location.reload();
          })
    }

    const user="fgfgf@dfdf.com";
    
    console.log(basket);
    

    return (
        <div className='payment'>
            <div className='payment__container'>
                
            <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
                />
            </Link>

            <div className='login__container'>
            <h1>Our hotel rating is {hotelowner.rating}</h1>
                <h1>Add food</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>Price</h5>
                    <input type='number' value={price} onChange={e => setPrice(e.target.value)} />

                    <h5>Type</h5>
                    <select id = "dropdown" value={type}  onChange={e => setType(e.target.value)}>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                    
                    <h5>Image URL</h5>
                    <input type='text' value={imageURL} onChange={e => setImageURL(e.target.value)} />

                    <button type='submit' onClick={add} className='login__signInButton'>Add</button>
                </form>

            </div>
        </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Your items</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <Ownerfood
                                id={item.id}
                                title={item.name}
                                image={item.imageURL}
                                price={item.price}
                                rating={item.rating}
                                type={item.type}
                                remove={remove}
                            />
                        ))}
                    </div>
                </div>
            

                
            </div>
        </div>
    )
}

export default Restarentowner







