import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Getreport.css";

const URL = 'http://localhost:64840/Api/Hooks/GetCarReportByPrsNumber/435275';
const GetReportByDateUrl = 'http://localhost:64840/Api/Hooks/GetReportByDate/1400-10-05';

const Getreport = () => {
  const [employees, setEmployees] = useState([]);
  const [ReportBYDate, setReportBYDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL);
      setEmployees(response.data);
      console.log(response.data);
    };
    getData();
    const getReportByDateUrl = async () => {
      const response2 = await axios.get(GetReportByDateUrl);
     // let data2=[rpi.ObjectId,rpi.Radif]
        let data2=[{ObjectId:response2.data.ObjectId,Radif:response2.data.Radif,CardNo:response2.data.CardNo,InOutDate:response2.data.InOutDate,
         ActionCode:response2.data.ActionCode,ActionTime:response2.data.ActionTime,Hostname:response2.data.Hostname,Ipaddress:response2.data.Ipaddress}]
      setReportBYDate(response2.data);
      console.log(data2);
    };
    getReportByDateUrl();
  }, []);

 

  const renderHeader = (headerElement) => {
        return headerElement.map((key, index) => {
      return (<th key={index}>{key.toUpperCase()}</th>);
    });
  };

  const renderBody = () => {
    return (
      employees &&
      employees.map(({ ep,PersianEnterDate,PersianExitDate }) => {
        return (
          <tr key={ep.PrsNo}>
            <td>{ep.FullName}</td>
            <td>{ep.Plate}</td>
            <td>{ep.PrsNo}</td>
            <td>{PersianEnterDate.PersianTime}</td>
            <td>{PersianExitDate.PersianDate}</td>
          
          </tr>
        );
      })
    );
  };
  const renderBody2 = () => {
    return (
      ReportBYDate &&
      ReportBYDate.map((data2) => {
        return (
          <tr key={data2.ObjectId}>
            <td>{data2.ObjectId}</td>
            <td>{data2.Radif}</td>
            <td>{data2.CardNo}</td>
            <td>{data2.InOutDate}</td>
            <td>{data2.ActionCode}</td>
            <td>{data2.ActionTime}</td>
            <td>{data2.UpdateTime}</td>
            <td>{data2.Hostname}</td>
            </tr>
        );
      })
    );
  };

  return (
    <div style={{overflow:'hidden'}}>

      <h1 id="title" >گزارش آپدیت</h1>
      <table id="employee">
        <thead>
        <tr >{renderHeader(["col1", "col2", "col3" ,"col4","col5","col6","col7","col8"])}</tr>
        </thead>
        <tbody>{renderBody2()}</tbody>
      </table>
      <table id="employee">
        <thead>
          <tr>{ renderHeader(["PrsNo", "FullName", "plate","Date","Time"])}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Getreport;
