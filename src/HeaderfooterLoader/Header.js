import React from 'react';
import Logo from '../Images/mosh2.png';
import '../Css/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    // <div className='text-right HeaderMis'>
    //   <div className='text-right  '>

    //     {/* <img
    //       src={Logo}
    //       style={{ height: '95px', position: 'sticky', top: 0 }}
    //       alt='pic'
    //     /> */}
    <div className="row">
     
      <nav className=" row navbar navbar-expand-lg navheader navbar-dark bg-danger">
        <div className="nav justify-content-left">
          <ul className="nav justify-content-center ">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link mt-2 " style={{color:'whitesmoke'}} >
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Register"} className="nav-link mt-2 "  style={{color:'whitesmoke'}}>
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // </div>
    // </div>
  );
};

export default Header;
