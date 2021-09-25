import React from "react";
import {NavLink,BrowserRouter,Switch,Route,exact, Redirect} from "react-router-dom";
import './App.css';
import Home from './Home';
import Login from "./login";
import Signup from "./signup";
import dashboard from "./dashboard";
function App() {
  return (
   

<div>




<BrowserRouter>


<Switch>


<Route path="/home" component={Home}></Route>
<Route path="/login" component={Login}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/dashboard" component={dashboard}></Route>


<Route exact path="/"><Redirect to="/home"></Redirect> </Route>
</Switch>

</BrowserRouter>
      


    

</div>


  );
}

export default App;
