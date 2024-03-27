import React, { useEffect } from 'react';
import '../../assets/css/navbar.css';
import logo from '../../assets/img/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import home from '../../assets/img/home.png';
import promotion from '../../assets/img/promotion.png';
import viber from '../../assets/img/viber.png';
import tele from '../../assets/img/tele.png';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import useFetch from "../../hooks/useFetch";
import BASE_URL from '../../hooks/baseURL';

const Navbar = () => {
  const auth = localStorage.getItem('token');
  const{data:authUser} = useFetch(BASE_URL + '/user');
  const[user, setUser] = useState(authUser);
  const[smallLoad,setSmallLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      setUser(authUser);
    }
  }, [authUser]);

  // console.log(user);
  const navs = [
    { id: 1, img: home, title: 'အိမ်', link: '/' },
    { id: 2, img: promotion, title: 'ပရိုမိုးရှင်း', link: '/promotion' },
    { id: 3, img: viber, title: 'ဂိမ်းမှတ်တမ်း', link: '/' },
    { id: 4, img: tele, title: 'မှတ်တမ်း', link: '/' },
  ];

  const sidebars = [
    { id: 1, font: 'fa-solid fa-gamepad', title: 'ဂိမ်းအားလုံး', link: '/' },
    { id: 2, font: 'fa-solid fa-gift', title: 'ပရိုမိုးရှင််း', link: '/promotions' },
    {
      id: 3,
      font: 'fa-solid fa-clipboard-list',
      title: 'ငွေသွင်းငွေထုတ်စာရင်း',
      link: '/history',
    },
    {
      id: 4,
      font: 'fa-solid fa-gamepad',
      title: 'ဂိမ်းမှတ်တမ်း',
      link: '/game-log',
    },
    {
      id: 5,
      font: 'fa-solid fa-key',
      title: 'လျှိ့ဝှက်နံပါတ်ပြောင်းရန်',
      link: '/change-password',
    },
    // { id: 6, font: 'fa-solid fa-coins', title: 'ငွေထုတ်ရန်', link: '/withdraw' },
    // {id:7,font:'fa-solid fa-file-invoice',title:'ငွေသွင်း/ထုတ်မှတ်တမ်း',link:'/'},
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = (e) => {
    e.preventDefault();
    setSmallLoad(true);
    //fetch api for logout url
    fetch(BASE_URL + "/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logout failed");
        }
        setSmallLoad(true);
        return response.json();
      })
      .then((data) => {
        localStorage.removeItem("token");
        localStorage.removeItem("authUser");
        // alert("Logged Out Successfully.");
        setSmallLoad(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <header className='d-flex flex-wrap align-items-center justify-content-center'>
      {/* <div className='d-flex align-items-center justify-content-between'>
        <Button
          variant='primary'
          onClick={handleShow}
          className='bg-transparent'
        >
          <i className='fa-solid fa-bars'></i>
        </Button>
        <div className="me-auto">
          <NavLink to={'/'}>
            <img src={logo} />
          </NavLink>
        </div>

        <div className='d-block d-md-none ms-auto'>
          <LuLogIn size={23} onClick={logOut} />
        </div>
      </div> */}
      <div className="container d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center justify-content-between w-100 mb-2'>
          <div className="">
            <NavLink to={'/'}>
              <img src={logo} />
            </NavLink>
          </div>
          <div className='d-block d-md-none ms-auto'>
            <LuLogIn size={23} onClick={logOut} />
          </div>
        </div>
        <div className=''>
          <div className='d-none d-lg-flex align-items-center gap-4  '>
            {navs.map((nav) => {
              return (
                <NavLink
                  key={nav.id} // Add key here
                  style={{
                    background: '#2D2D2D',
                    border: '2px solid #431F76',
                    width: '100px',
                  }}
                  className='rounded-bottom-4 py-1 text-decoration-none text-center text-light'
                  to={nav.link}
                >
                  <img style={{ width: '30px', height: '30px' }} src={nav.img} />
                  <p style={{ fontSize: '14px' }} className='mt-1'>
                    {nav.title}
                  </p>
                </NavLink>
              );
            })}
          </div>
          {!auth && (
            <NavLink to={'/login'}>
              <button className=' navLoginBtn'>လော့ဂ်အင်</button>
            </NavLink>
          )}
        </div>
        <div style={{ cursor: 'pointer' }} className="d-none d-md-block">
          {auth && (
            <div className='d-flex align-items-center gap-1'>
              <div className="d-flex align-items-center gap-1">
                <FaUser />
                <span>{ auth && user.user_name }</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <LuWallet size={23} />
                <span>K{parseFloat(user.balance).toLocaleString()}</span>
              </div>
              <div className='d-none d-md-block'>
                <LuLogIn size={23} onClick={logOut} />
              </div>
            </div>
          )}
        </div>
      </div>

        <div style={{ cursor: 'pointer' }} className="d-block d-md-none ms-auto pb-2">
          {auth && (
            <div className='d-flex align-items-center gap-2 justify-content-end'>
              <div className="gap-2 d-flex align-items-center">
                <FaUser />
                <span>{ auth && user.user_name }</span>
              </div>
              <div className="gap-2 d-flex align-items-center">
                <LuWallet size={23} />
                <span>K{parseFloat(user.balance).toLocaleString()}</span>
              </div>
              <div className='d-none d-md-block'>
                <LuLogIn size={23} onClick={logOut} />
              </div>
            </div>
          )}
        </div>
      {/* <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ 
          color: '#ccc', 
          background : "linear-gradient(170deg, rgba(46,0,154,1) 0%, rgba(22,0,110,1) 100%, rgba(79,94,255,1) 100%)",
          background : "rgb(46,0,154)"
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=''>
            <img src={logo} width={100} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: 'none' }}>
            {sidebars.map((sidebar) => {
              return (
                <li
                  key={sidebar.id}
                  className='my-4'
                  style={{ fontSize: '16px' }}
                >
                  <Link
                    to={sidebar.link}
                    id={sidebar.id}
                    style={{ color: '#ccc', textDecoration: 'none' }}
                  >
                    <i
                      className={sidebar.font}
                      style={{ fontSize: '20px' }}
                    ></i>
                    <span className='ms-4'>{sidebar.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas> */}
    </header>
  );
};

export default Navbar;
