/* eslint-disable */
import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import Header from '../HeaderfooterLoader/Header';
import {ApiUrlProduction,ApiUrlTest} from '../Constant/Constant'
function Createemployee(props) {  
  const [employee, setemployee] = useState({ Name: '', Department: '', Age: '',
   City: '', Country: '', Gender: '',ID_NEW:'',FullName:'',PrsNo:'',column_3:'',
   column_4:'',column_5:'',column_6:'',column_7:'',column_8:'',Plate:'' });  
  //const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = `${ApiUrlTest}`+"/Hooks/CreateEmp";  
  const Insertemployee = (e) => {
    e.preventDefault();

    debugger;

    const data = {
      Name: employee.Name,
      Department: employee.Department,
      Age: employee.Age,
      City: employee.City,
      Country: employee.Country,
      Gender: employee.Gender,
      ID_NEW: employee.ID_NEW,
      FullName: employee.FullName,
      PrsNo: employee.PrsNo,
      column_3: employee.column_3,
      column_4: employee.column_4,
      column_5: employee.column_5,
      column_6: employee.column_6,
      column_7: employee.column_7,
      column_8: employee.column_8,
      Plate: employee.Plate,
    };
    axios.post(apiUrl, data).then((result) => {
      props.history.push("/EmployeList");
    });
  };  

  const onChange = (e) => {  

    e.persist();  

    debugger;  

    setemployee({...employee, [e.target.name]: e.target.value});  

  }  

  

  return (  

    <div className="app flex-row align-items-center">
      <Header />

      <Container className="mt-3" style={{ direction: "rtl" }}>
        <form>
          <div className=" row">
            <div className="form-group col-md-3">
              <label htmlFor="inputEmail4">نام کامل</label>
              <input
                type="text"
                className="form-control mt-1"
                id="fullName"
                name="FullName"
                placeholder="نام کامل"
                value={employee.FullName}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">معاونت</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="معاونت"
                name="Department"
                id="Department"
                value={employee.Department}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">سن</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="سن"
                name="Age"
                id="Age"
                value={employee.Age}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">شهر</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="شهر"
                name="City"
                id="City"
                value={employee.City}
                onChange={onChange}
              />
            </div>
          </div>
          <div className=" row mt-3">
            <div className="form-group col-md-3">
              <label htmlFor="inputEmail4">کشور</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="کشور"
                name="Country"
                id="Country"
                value={employee.Country}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">جنسیت</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="جنسیت"
                name="Gender"
                id="Gender"
                value={employee.Gender}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">شماره پرسنلی</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="شماره پرسنلی"
                name="PrsNo"
                id="PrsNo"
                value={employee.PrsNo}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">شماره پلاک</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="شماره پلاک"
                name="Plate"
                id="Plate"
                readOnly
                value={employee.Plate}
                onChange={onChange}
              />
            </div>
          </div>
          <div className=" row mt-3">
            <div className="form-group col-md-3">
              <label htmlFor="inputEmail4">مدل خودرو</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="مدل خودرو"
                name="column_8"
                id="column_8"
                value={employee.column_8}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">ایران</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="ایران"
                name="column_3"
                id="column_3"
                value={employee.column_3}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">دو رقم استان و شهر</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="دو رقم"
                name="column_4"
                id="column_4"
                value={employee.column_4}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">عدد سه رقم وسط</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="سه رقمی"
                name="column_5"
                id="column_5"
                value={employee.column_5}
                onChange={onChange}
              />
            </div>
          </div>

          <div className=" row mt-3">
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">حروف الفبا</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="حروف الفبا"
                name="column_6"
                id="column_6"
                value={employee.column_6}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">دو رقم انتهای سمت چپ</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="دو رقمی سمت چپ"
                name="column_7"
                id="column_7"
                value={employee.column_7}
                onChange={onChange}
              />
            </div>
          </div>
          {/* <Button className=" row mt-1"
              className="btn btn-danger w-45 "
              onClick={(e) => {
                history.push("/");
              }}
            >
              لغو
            </Button> */}

          {/* <div className="form-group col-md-2">
            <Button className="btn btn-primary w-45 " onClick={(e)=>{UpdateEmployee(e)}}>ذخیره تغییرات</Button> 
            </div> */}
        </form>

        {/* <div className="row mt-5 btn btn-primary w-45 btn btn-info w-25"> */}
        <div className="row mt-5 "> 
          {
              <button className=" mt-5 btn btn-info w-45"
              type="button"
              id="Print"
              // className="editBtn"
              // data-toggle="modal"
              // data-target=".bd-example-modal-lg"
              onClick={(e) => {
                console.log("row clicked:", e);
                swal({
                  title: "Are you sure?",
                  text: "ذخیره شود",
                  icon: "success",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    Insertemployee(e);
                    swal("Poof! saved", {
                      icon: "success",
                    });
                  } else {
                    swal("Your imaginary file is safe!");
                  }
                });
              }}
            >
              ذخیره تغییرات
            </button>
          }
          {/* <Button className="btn btn-primary w-45 " onClick={(e)=>{UpdateEmployee(e)}}>ذخیره تغییرات</Button> */}
          &nbsp; &nbsp;
          <Button
            className="btn btn-danger w-45 "
            onClick={(e) => {
              history.push("/");
            }}
          >
            لغو
          </Button>
        </div>
      </Container>
    </div>
  );


  //   <div className="app flex-row align-items-center">  
  //       <Header/>
  //     <Container>  

  //       <Row className="justify-content-center">  

  //         <Col md="12" lg="10" xl="8">  

  //           <Card className="mx-4">  

  //             <CardBody className="p-4">  

  //               <Form onSubmit={Insertemployee}>  

  //                 <h1 style={{fontFamily: 'vazir'}}>ثبت کارمند</h1>  

  //                 <InputGroup className="mb-3">  

  

  //                   <Input type="text" name="Name" id="Name" placeholder="نام" value={employee.Name} onChange={ onChange }  />  

  //                 </InputGroup>  

  //                  <InputGroup className="mb-3">  

  

  //                   <Input type="text" placeholder="واحد" name="واحد" id="Department" value={employee.Department} onChange={ onChange }/>  

  //                 </InputGroup>  

  //                 <InputGroup className="mb-3">  

  

  //                   <Input type="text" placeholder="سن" name="Age" id="Age"  value={employee.Age} onChange={ onChange }  />  

  //                 </InputGroup>  

  //                 <InputGroup className="mb-4">  

  

  //                   <Input type="text" placeholder="شهر" name="City" id="City" value={employee.City} onChange={ onChange }  />  

  //                 </InputGroup>  

  //                <InputGroup className="mb-4">  

  

  //                   <Input type="text" placeholder="کشور" name="Country" id="Country" value={employee.Country} onChange={ onChange } />  

  //                 </InputGroup>  

  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="جنسیت" name="Gender" id= "Gender" value={employee.Gender} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="شماره سیستمی" name="ID_NEW" id= "ID_NEW" value={employee.ID_NEW} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="نام و نام خانوادگی" name="FullName" id= "FullName" value={employee.FullName} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="شماره پرسنلی" name="PrsNo" id= "PrsNo" value={employee.PrsNo} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_3" name="column_3" id= "column_3" value={employee.column_3} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_4" name="column_4" id= "column_4" value={employee.column_4} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_5" name="column_5" id= "column_5" value={employee.column_5} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_6" name="column_6" id= "column_6" value={employee.column_6} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_7" name="column_7" id= "column_7" value={employee.column_7} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="column_8" name="column_8" id= "column_8" value={employee.column_8} onChange={ onChange } />  
  //                 </InputGroup>   
  //                 <InputGroup className="mb-4">   
  //                    <Input type="text" placeholder="Plate" name="Plate" id= "Plate" value={employee.Plate} onChange={ onChange } />  
  //                 </InputGroup>   
                

  //            <CardFooter className="p-4">  

  //               <Row>  

  //                 <Col xs="12" sm="6">  

  //                   <Button type="submit" className="btn btn-info mb-1" block><span>ذخیره</span></Button>  

  //                 </Col>  

  //                 <Col xs="12" sm="6">  

  //                   <Button className="btn btn-info mb-1" block><span>لغو</span></Button>  

  //                 </Col>  

  //               </Row>  

  //             </CardFooter>  

  //               </Form>  

  //             </CardBody>  

  //           </Card>  

  //         </Col>  

  //       </Row>  

  //     </Container>  

  //   </div>  

  // )  

}  

export default Createemployee 