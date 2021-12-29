/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Logincss.css";
import park from "../Images/parking.png"; // with import
import { useHistory } from "react-router-dom";
import Header from "../HeaderfooterLoader/Header";
import EmployeList from "../Carparking/EmployeeList";

const Login1 = (props) => {
  const history = useHistory();
  const [karmand , setkarmand] = useState({})
   
  const apiUrl = "http://localhost:60154/api/employee/Login";
  const Vorood = (e) => {
  //  e.preventDefault();
   // debugger;
    const data = { Email: karmand.Email, Password: karmand.Password };
    axios.post(apiUrl, data).then((result) => {
      debugger;
      console.log(result.data);
      const serializedState = JSON.stringify(result.data.UserDetails);
      var a = localStorage.setItem("myData", serializedState);
      console.log("A:", a);
      const user = result.data.UserDetails;
      console.log(result.data.message);
      if (result.data.status==="200") props.history.push("/Dashboard");
      else alert("Invalid User");
      console.log(user);
    });
    // useEffect(() => {
    //   Vorood();
    // }, []);
  };

   const onChange = (e) => {    
      e.persist();    
      debugger;    
      setkarmand({...karmand, [e.target.name]: e.target.value});  
       const Login = (e) => {
    e.preventDefault();
    debugger;
    const data = { Email: karmand.Email, Password: karmand.Password };
    axios.post(apiUrl, data).then((result) => {
      debugger;
      console.log(result.data);
      const serializedState = JSON.stringify(result.data.UserDetails);
      var a = localStorage.setItem("myData", serializedState);
      console.log("A:", a);
      const user = result.data.UserDetails;
      console.log(user);
      console.log(result.data.message);
      if (result.data.status == "200") props.history.push("/Dashboard");
      else alert("Invalid User");
    });
  };  
    }
  return (
  
          <div class="container mt-5"> 
             <Header />
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={park} className="brand_logo" alt="Logo"></img>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={Vorood} className="user">
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="Email"
                    className="form-control input_user"
                    value={karmand.Email}
                    onChange={onChange}
                    placeholder="username"
                  ></input>
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="text"
                    className="form-control input_user"
                    value={karmand.Password}
                    onChange={onChange}
                    placeholder="password"
                  ></input>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    ></input>
                    <label
                      className="custom-control-label"
                      for="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container"></div>
                <button
                  type="Submit"
                  name="button"
                  className="btn login_btn"
                  onClick={(e) => {
                    history.push("/Employelist/0");
                  }}
                >
                  ورود
                </button>
              </form>
            </div>

            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
