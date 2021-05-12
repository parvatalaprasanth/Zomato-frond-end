import React, { useState,useEffect } from 'react';
import Slides from './Slides';
import "./Home.css";
import Hotels from "./Hotels";
import { Link, useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import geolocation from 'geolocation';
import {location} from './action/index';



function Home() {
    const hotelowner=useSelector(state=>state.main.hotelowner);
    const history = useHistory();
    const [longitude,setLongitude] = useState(null)
    const [latitude,setLatitude] = useState(null)
    const[distance,setDistance]=useState(null);
    const dispatch=useDispatch();
    if(hotelowner){
        history.replace('/restarentowner');
    }

    useEffect(() => {
        geolocation.getCurrentPosition(function (err, position) {
            if (err) throw err
            const obj={
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            }
            dispatch(location(obj))
            
            //console.log(dist.getDistance(latitude, longitude, Number(obj.latitude), Number(obj.longitude)))
            
            
          })
    }, []);

    return (
        <>
           <Slides className="home__img" className="home__container"/>
            <Hotels/>
        </>
    )
}

export default Home
