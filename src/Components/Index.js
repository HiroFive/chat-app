import React from 'react';
import SignIn from './Page/SignIn'
import SignUp from './Page/SignUp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Head (){
  
    return(
    <Router>
      <Routerrr/>
    </Router>
    )
}
function Home() {
  return (
    <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
    </div>
  );
}
function Routerrr(){
  return(
     <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
    </Switch>
  )
}
export default Head