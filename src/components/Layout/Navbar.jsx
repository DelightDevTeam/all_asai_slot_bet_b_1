import React, { useEffect, useState } from 'react';
import '../../assets/css/navbar.css';
import logo from '../../assets/img/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classic from '../../assets/img/classic.png';
import home from '../../assets/img/home.png';
import promotion from '../../assets/img/promotion.png';
import viber from '../../assets/img/viber.png';
import tele from '../../assets/img/tele.png';
import { IoGridOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { HiOutlineCash } from "react-icons/hi";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineLockClock } from "react-icons/md";

import useFetch from "../../hooks/useFetch";
import BASE_URL from '../../hooks/baseURL';

const Navbar = () => {
  let auth = localStorage.getItem("authToken");
  let [url, setUrl] = useState(BASE_URL + "/user");
  const {data:user} = useFetch(url);

  useEffect(() => {
    setUrl(BASE_URL + "/user");
  }, [url]);
  console.log('auth',auth)
  console.log('user',user);

  let navigate = useNavigate();
  let [smallLoad, setSmallLoad] = useState(false);

  // console.log(user);
  const navs = [
    { id: 1, img: home, title: 'အိမ်', link: '/' },
    { id: 2, img: promotion, title: 'ပရိုမိုးရှင်း', link: '/promotion' },
    { id: 3, img: viber, title: 'Viber', link: '/' },
    { id: 4, img: tele, title: 'Telegram', link: '/' },
  ];

  const sidebars = [
    { id: 1, icon: <IoGridOutline size={25} />, title: 'ဂိမ်းအားလုံး', link: '/' },
    // { id: 2, font: 'fa-solid fa-building-columns', title: 'ငွေသွင်းရန်', link: '/topup' },
    {
      id: 3,
      icon: <HiOutlineCash size={25} />,
      title: 'ငွေသွင်းငွေထုတ်စာရင်း',
      link: '/history',
    },
    {
      id: 4,
      icon: <LuNewspaper size={25} />,
      title: 'ဂိမ်းမှတ်တမ်း',
      link: '/game-log',
    },
    {
      id: 5,
      icon: <MdOutlineLockClock size={25} />,
      title: 'လျှိ့ဝှက်နံပါတ်ပြောင်းရန်',
      link: '/change-password',
    },
    // { id: 6, font: 'fa-solid fa-coins', title: 'ငွေထုတ်ရန်', link: '/withdraw' },
    // {id:7,font:'fa-solid fa-file-invoice',title:'ငွေသွင်း/ထုတ်မှတ်တမ်း',link:'/'},
    // {
    //   id: 7,
    //   icon: <IoMdLogOut size={25} />,
    //   title: 'ထွက်ရန်',
    //   link: '/',
    // },
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
        Authorization: "Bearer " + localStorage.getItem("authToken"),
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
        localStorage.removeItem("authToken");
        // localStorage.removeItem("authUser");
        // alert("Logged Out Successfully.");
        setSmallLoad(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <header className='py-2 py-sm-3 py-lg-0 px-3 px-sm-5 d-flex flex-wrap align-items-center  justify-content-between '>
      <div className='d-flex align-items-center w-sm-100 justify-content-between'>
        <div>
          <Button
            variant='primary'
            onClick={handleShow}
            className='bg-transparent sideMenu '
          >
            <i className='fa-solid fa-bars'></i>
          </Button>
          <NavLink to={'/'} >
            <img src={logo} className='logoImg' />
          </NavLink>
        </div>
        
      </div>

      <div className='d-flex align-items-center  gap-4 '>
        <div className='d-none d-lg-flex align-items-center gap-4  '>
          {navs.map((nav) => {
            return (
              <NavLink
                key={nav.id} // Add key here
                style={{
                  background: '#2D2D2D',
                  borderLeft: '2px solid #E09F52',
                  borderRight: '2px solid #E09F52',
                  borderBottom: '2px solid #E09F52',
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
        <>
          <NavLink to={'/login'}>
            <button className=' navLoginBtn'>LOGIN</button>
          </NavLink>
          </>
        )}
        {auth && (
          <div className='d-md-none d-sm-block' >
              <LuLogIn size={23} style={{ "cursor" : "pointer" }} onClick={logOut} />
          </div>
        )}

        {/* <NavLink to={'/register'}>
          <button className='navRegisterBtn'>မှတ်ပုံတင်</button>
        </NavLink> */}
      </div>

      <Offcanvas
        placement='top'
        show={show}
        onHide={handleClose}
        className=' '
        style={{ color: '#ccc' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='mt-4 ps-3 fw-bold d-flex align-items-center gap-2' style={{ fontSize: '16px' }}>
            <img src={classic} style={{ width: '40px', height: '40px' }} />
            <h5 className='mt-1 text-light'>WELCOME!</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: 'none' }}>
            {sidebars.map((sidebar) => {
              return (
                <li
                  key={sidebar.id}
                  className='my-4 fw-bold'
                  style={{ fontSize: '15px' }}
                >
                  <Link
                    to={sidebar.link}
                    id={sidebar.id}
                    style={{ color: '#ccc', textDecoration: 'none' }}
                  >
                    {/* <i
                      className={sidebar.font}
                      style={{ fontSize: '20px' }}
                    ></i> */}
                    {sidebar.icon}
                    <span className='ms-2 ms-sm-4'>{sidebar.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {auth && user && (
        <div style={{ cursor: 'pointer' }} className="mt-2 mt-sm-0 mt-md-4  mt-lg-0 mb-0 mb-md-4   mb-xl-0 d-flex align-items-center  justify-content-between justify-content-sm-start gap-4 userInfo">
          <button className="btn btn-sm text-white" onClick={()=>window.location.reload()}><i className="fas fa-rotate"></i></button>
          <NavLink to={'/profile'}>
            <div className="d-flex align-items-center gap-1">
              <FaUser />
              <span>ID:{user.user_name}</span>
            </div>
          </NavLink>
          <div className="d-flex align-items-center gap-1">
            <LuWallet size={23} />
            <span>K{parseFloat(user.balance).toLocaleString()}</span>
          </div>
          <div className='d-none d-sm-flex' >
            <LuLogIn size={23} style={{ "cursor" : "pointer" }} onClick={logOut} />
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
