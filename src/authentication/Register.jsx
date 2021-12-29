/* eslint-disable */

import React, { useState } from "react";
import axios from "axios";
import park from "../Images/parking.png";
import { useHistory } from "react-router-dom";
import {ApiUrlProduction,ApiUrlTest} from "../Constant/Constant";
import Header from "../HeaderfooterLoader/Header";
const Register = (props) => {
  const history = useHistory;
  const [dataa, setdata] = useState({
    // 
    // Id:"",
    Email: "",
    Password: "",
    EmployeeName: "",
    PrsNo: "",
    Submit: true,
  });
  const apiUrl = `${ApiUrlTest}`+"employee/InsertEmployee";
  const Registration = (e) => {
      e.preventDefault();
     debugger;
    const data1 = {
      // Id: dataa.Id,
      Email: dataa.Email,
      Password: dataa.Password,
      EmployeeName: dataa.EmployeeName,
      PrsNo: dataa.PrsNo,
    };
    axios.post(apiUrl, data1).then((result) => {
      debugger;
      console.log(result.dataa);
      if (result.data.Status === "Invalid") alert("Invalid User");
      else props.history.push("/Dashboard");
    });
  };
  const onChange = (e) => {
    e.persist();
    debugger;
    setdata({ ...dataa, [e.target.name]: e.target.value });
  };
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
              <form onSubmit={Registration} ClassName="user">
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
                    value={dataa.Email}
                    onChange={onChange}
                    placeholder="یوزرنیم"
                  ></input>
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="Password"
                    name="Password"
                    onChange={onChange}
                    value={dataa.Password}
                    className="form-control input_user"
                    id="exampleLastName"
                    value={dataa.Password}
                    onChange={onChange}
                    placeholder="پسورد"
                  />
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
                      remember me{" "}
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button
                    type="submit"
                    name="button"
                    className="btn login_btn"
                    // onClick={(e) => {
                    //   history.push("/Login1/");
                    // }}
                  
                  >
                    ثبت نام
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>

    // <div ClassName="container">
    //   <div ClassName="row">
    //     {/* <div ClassName="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>
    //       Add New Contact
    //    </div>   */}
    //   </div>
    //   <div ClassName="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
    //     <div ClassName="card-body p-0">
    //       <div ClassName="row">
    //         <div ClassName="col-lg-12">
    //           <div ClassName="p-5">
    //             <div ClassName="text-center">
    //               <h1 ClassName="h4 text-gray-900 mb-4">ایجاد کاربر جدید</h1>
    //             </div>
    //             <form onSubmit={Registration} ClassName="user">
    //               <div ClassName="form-group row">
    //                 <div ClassName="col-sm-6 mb-3 mb-sm-0">
    //                   <input type="text" name="Email" onChange={onChange} value={data.Email} ClassName="form-control" id="exampleFirstName" placeholder="Email" />
    //                 </div>
    //                 <div ClassName="col-sm-6">
    //                   <input type="Password" name="Password" onChange={onChange} value={data.Password} ClassName="form-control" id="exampleLastName" placeholder="Password" />
    //                 </div>
    //               </div>
    //               {/* <div ClassName="form-group">
    //                 <input type="text" name="EmployeeName" onChange={onChange} value={data.EmployeeName} ClassName="form-control" id="exampleInputEmail" placeholder="EmployeeName" />
    //               </div>   */}
    //               {/* <div ClassName="form-group row">   */}
    //                 {/* <div ClassName="col-sm-6 mb-3 mb-sm-0">
    //                   <input type="text" name="City" onChange={onChange} value={data.City} ClassName="form-control" id="exampleInputPassword" placeholder="City" />
    //                 </div>   */}
    //                 {/* <div ClassName="col-sm-6">
    //                   <input type="text" name="Department" onChange={onChange} value={data.Department} ClassName="form-control" id="exampleRepeatPassword" placeholder="Department" />
    //                 </div>   */}
    //               {/* </div>   */}
    //               <button type="submit" ClassName="btn btn-primary  btn-block">
    //                 ایجاد کاربر
    //             </button>
    //               <hr />
    //             </form>
    //             <hr />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
