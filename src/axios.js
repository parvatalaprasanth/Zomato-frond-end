import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'enter your api endpoint/' 
    
});

//example 'http://localhost:5000/'
export default instance;
