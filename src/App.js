import React from "react";
// import { Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Landing from "./components/Starters/Landing";
import Footer from "./components/UI comps/Footer";
import Login from './components/Starters/Login';
import Signup from './components/Starters/Signup';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI comps/Navbar";

function App() {
  return (
    <BrowserRouter>
    <>
   
         <Navbar/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      {/* <Redirect exact to="/" /> */}
      </Switch>
      <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
