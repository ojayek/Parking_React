/* eslint-disable */
import React, { useState, useEffect } from "react";
function Dashboard() {
  const [user, setuser] = useState({ Email: "", Password: "" });
  useEffect(() => {
    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.EmployeeName);
    setuser(b);
    console.log(user.EmployeeName);
  }, []);
  return (
    <>
      <div class="col-sm-12 btn btn-primary">داشبرد</div>
      <h1>خوش آمدید :{user.EmployeeName}</h1>
    </>
  );
}

export default Dashboard;
