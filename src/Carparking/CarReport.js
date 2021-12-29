/* eslint-disable */
import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import Header from "../HeaderfooterLoader/Header";
import CustomTable from "../TableColumn/CustomTable";
import { CarColumns } from "../TableColumn/Columns";
import axios from "axios";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Loaderpage from "../HeaderfooterLoader/Loaderpage";
import {ApiUrlTest,ApiUrlProduction} from '../Constant/Constant';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import deleteeployee from './EmployeeList';








const CarReport = (props) => {
  const [data, setData] = useState([]);

  const history = useHistory();
  useEffect(() => {
    // console.log('querystring:',props.match.params.id)
    const GetData = async () => {
      const result = await axios(`${ApiUrlTest}`+
        "hooks/GetCarReportByPrsNumber/" +
          props.match.params.id
      );
      setData(result.data);
    };
    GetData();
  }, []);
  const kartableActions = {
    Header: "-",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations" style={{ height: "35px" }}>
            {" "}
          </div>
        ),
      },
    ],
  };
  const GetData = async () => {
    const ApiUrl=`${ApiUrlTest}`+"hooks/employee";
    console.log('apiurl',ApiUrl);
    const result = await axios(ApiUrl);
    setData(result.data);
  };

  const deleteeployee = (id) => {
    let ApiUrl=`${ApiUrlTest}`+"hooks/Deleteemployee?id=" + id;
    console.log('apiurl',ApiUrl);
    axios
      .delete(ApiUrl)
      .then((_result) => {
        GetData();
      });
    if (data.Status === "Success") {
      console.log(data.Status);
      // alert("Data Save Successfully");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

    
 






















  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
           <div className="Operations">
                   {/* <button
          //     type="button"
          //     id="View"
          //     className="editBtn"
          //     data-toggle="modal"
          //     data-target=".bd-example-modal-lg1"
          //     onClick={(e) => {
          //       history.push("/CarReport/" + row.original.PrsNo);
          //     }}
          //   >
          //     گزارش تردد
          //   </button> */}
{/* 
            <button
              type="button"
              id="Print"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg2"
              onClick={(e) => {
                console.log("row clicked:", row.original);
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                });
                history.push("/edit/" + row.original.Id);
              }}
            >
              ویرایش
            </button> */}
            {
              <button
                type="button"
                id="Print"
                className="editBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                onClick={(e) => {
                  console.log("row clicked:", row.original);
                  swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                  }).then((willDelete) => {
                    if (willDelete) {
                      deleteeployee(row.original.Id);
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    };
                    ; 
                  });
                  //window.location.reload();
                }}
              >
                حذف
              </button>
            }
          </div>
        ),
      },
    ],
  };





  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, CarColumns],

    []
  );














 
 
     function printDocument() { 

     const pdf = new jsPDF("l", "px", "a4");
     const input = document.getElementById('root');
     let width = pdf.internal.pageSize.getWidth();
     let height = pdf.internal.pageSize.getHeight()
      
              if (pdf) {
                domtoimage.toPng(input)
                  .then(imgData => {
                    pdf.addImage(imgData, 'JPEG', 10, 10, width, height);
                    pdf.save('timeshit.pdf');
                  });
              }
          }



     
















  









  return (

    <div className="animated text-center" id="content" >

      <Header />
      <span className="d-block m-3 " style={{ fontSize: "20pt", color: "white" }}>
        گزارش تردد پرسنل
      </span>
      {data.length > 0 ? (
        <CustomTable
          columns={KartableColumnsForAdmin}
          data={data ? data : []}
        />
      ) : (
        <Loaderpage></Loaderpage>
      )}
      <div>
        <Button
          className="btn btn-info"
          onClick={(e) => {
            history.push("/");
          }}
        >
          برگشت به صفحه اصلی
        </Button>
       
        <div className="m-2" >
        <Button onClick={(e)=>{printDocument()}}>             
        چاپ صفحه
        </Button>
        </div>
      
      </div>
    </div>
  );
        
};
        
export default CarReport;
