import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route ,Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Createemployee from '../src/Carparking/Createemployee';
import EmployeList from './Carparking/EmployeeList';
import Editemployee from "../src/Carparking/Editemployee";
import CarReport from "../src/Carparking/CarReport";
import Login1 from "../src/authentication/Login1";
import Register from '../src/authentication/Register';
import Dashboard from '../src/authentication/Dashboard';
import Hooklogin from '../src/authentication/Hooklogin';
import UpdateRollcallback from './Carparking/UpdateRolcallback';
import HomePage from './Carparking/HomePage'
import  Getreport  from '../src/Carparking/Getreport';
import  NotFound  from '../src/Carparking/NotFound';
import './App.css';  



function App() {  
  return (
    <div>
      <BrowserRouter basename="/ParkingUi">
        <Switch>
          <Route exact path="/" component={EmployeList} />{" "}
          <Route exact path="/Createemployee" component={Createemployee} />{" "}
          <Route exact path="/edit/:id" component={Editemployee} />{" "}
          <Route exact path="/create/:id" component={Editemployee} />{" "}
          <Route exact path="/Employelist/" component={EmployeList} />{" "}
          <Route exact path="/CarReport/:id" component={CarReport} />{" "}
          <Route exact path="/login" component={Editemployee} />{" "}
          <Route exact path="/Register" component={Register} />{" "}
          <Route exact path="/Dashboard" component={Dashboard} />{" "}
          <Route exact path="/UpdateRolcallback" component={UpdateRollcallback}/>{" "}
          <Route exact path="/Getreport" component={Getreport}/>{" "}
          <Route exact  component={NotFound}/>{" "}
        </Switch>
      </BrowserRouter>
    </div>
  );  
}  
export default App