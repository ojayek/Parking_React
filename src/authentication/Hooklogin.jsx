/* eslint-disable */
import React from 'react';  
import '../App.css';  
import Login1 from "./Login1";  
import Register from "./Register";  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Dashboard from "./Dashboard";  
const Hooklogin = () => {  
  return (  
    <Router>      
      <div className="container">      
        {/* <nav className="navbar navbar-expand-lg navheader">      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto">      
              <li className="nav-item">      
                <Link to={'/login'} className="nav-link btn btn-info mt-2">ورود</Link>      
              </li>    
              <li className="nav-item">      
                <Link to={'/Register'} className="nav-link btn btn-info mt-2"> ورود ثبت</Link>      
              </li>    
            </ul>      
          </div>      
        </nav> <br />       */}
        <Switch>        
          <Route exact path='/login' component={Login1} />     
          <Route exact path='/Regster' component={Register} />    
          <Route exact path='/Dashboard' component={Dashboard} />  
        </Switch>      
      </div>      
    </Router>     
  );  
}  
  
export default Hooklogin;