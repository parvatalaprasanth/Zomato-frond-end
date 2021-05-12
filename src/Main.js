import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Restarent from './Restarent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from './Map';
import Payment from './Payment';
import Restaurentlogin from './Restaurentlogin';
import Restarentregister from './Restarentregister';
import Restarentowner from './Restarentowner';
import Paymentfail from './Paymentfail';
import Paymentsuccesss from './Paymentsuccesss';
import Orders from './Orders';




function Main() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route path="/home">
      <Home/>
      </Route>
      <Route path="/paymentsuccesss">
      <Paymentsuccesss/>
      </Route>
      <Route path="/orders">
      <Orders/>
      </Route>
      <Route path="/restaurent">
      <Restarent/>
      </Route>
      <Route path="/paymentfail">
      <Paymentfail/>
      </Route>
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/register">
      <Register/>
      </Route>
      <Route path="/map">
      <Map/>
      </Route>
      <Route path="/payment">
      <Payment/>
      </Route>
      <Route path="/restaurentlogin">
      <Restaurentlogin/>
      </Route>
      <Route path="/restarentregister">
      <Restarentregister/>
      </Route>
      <Route path="/restarentowner">
      <Restarentowner/>
      </Route>
      <Route path="/">
      <Home/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default Main;
