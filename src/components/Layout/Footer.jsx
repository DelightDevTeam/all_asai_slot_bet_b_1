import React from 'react';
import '../../assets/css/footer.css';
import { TbHome } from "react-icons/tb";
import { ImGift } from "react-icons/im";
import { RiHistoryFill } from "react-icons/ri";
import { GoLog } from "react-icons/go";


import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerAfterLogin = [
    { id: 1, icon: <TbHome size={25} color='#EBBE6C' />, link: '/', title: 'HOME' },
    { id: 2, icon: <ImGift size={25} color='#EBBE6C' />, link: '/promotion', title: 'PROMOTION' },
    { id: 4, icon: <RiHistoryFill size={25} color='#EBBE6C' />, link: '/history', title: 'HISTORY' },
    { id: 5, icon: <GoLog size={25} color='#EBBE6C' />, link: '/game-log', title: 'GAME LOG' },
  ];

  return (
    <footer className='px-2 px-sm-5 pt-2 rounded-top-4 shadow-lg  d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map((item) => (
        <NavLink
          key={item.id}
          className='text-decoration-none text-center text-light'
          // style={{ color: '#ebc171' }}
          to={item.link}
        >
          {item.icon}
          <p  >{item.title}</p>
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
