/* eslint-disable */
import React, { useMemo } from "react";
import CustomTable from "../TableColumn/CustomTable";
import { TitleColumns, SubTitleColumnsForShow } from "../TableColumn/Columns";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../HeaderfooterLoader/Header";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Loaderpage from "../HeaderfooterLoader/Loaderpage";
import {ApiUrlProduction,ApiUrlTest} from "../Constant/Constant";
import "../Css/Effectbotton.css";
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';


const EmployeList = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const GetData = async () => {
    const ApiUrl=`${ApiUrlTest}`+"hooks/employee";
    console.log('apiurl',ApiUrl);
    const result = await axios(ApiUrl);
    setData(result.data);
  };
  useEffect(() => {
    GetData();
  }, []);
  const deleteeployee = (id) => {
    let ApiUrl=`${ApiUrlTest}`+"hooks/Deleteemployee?id=" + id;
    console.log('apiurl',ApiUrl);
    axios
      .delete(ApiUrl)
      .then((result) => {
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
  };




  const editemployee = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
    if (data.Status === "Success") {
      console.log(data.Status);
      alert("Data Save Successfully");
    }
  };


  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            <button
              type="button"
              id="View"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg1"
              onClick={(e) => {
                history.push("/CarReport/" + row.original.PrsNo);
            
              }}
            >
              گزارش تردد
            </button>

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
            </button>
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
                    icon: "warning",
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
                    }
                  });
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

  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, TitleColumns],

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
    <div className="text-center animated">
      <Header />
      <div>
        <button
          type="button"
          className="btn btn-primary mt-2 col-6"
          onClick={(e) => {
            Swal.fire("با موفقیت!", "به روز رسانی انجام شد!", "success");
          }}
        >
          بروز رسانی
        </button>
      </div>
      {data.length > 0 ? (
        <CustomTable
          columns={KartableColumnsForAdmin}
          data={data ? data : []}
        />
      ) : (
        <Loaderpage></Loaderpage>
      )}
      <button
        type="button"
        id="Create"
        className="btn btn-warning mb-3 col-6"
        onClick={(e) => {
          history.push("/create/0");
        }}
      >
        ایجاد
      </button>

      <button
        onClick={(e) => {
          printDocument();
        }}
      >
        چاپ صفحه
      </button>
    </div>
  );
};
export default EmployeList;
