import React from 'react';
import '../../assets/css/footer.css';
import { TbHome } from "react-icons/tb";
import { ImGift } from "react-icons/im";
import { RiHistoryFill } from "react-icons/ri";
import { GoLog } from "react-icons/go";


import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerAfterLogin = [
    { id: 1, icon: <TbHome size={25} />, link: '/', title: 'အိမ်' },
    { id: 2, icon: <ImGift size={25} />, link: '/promotion', title: 'ပရိုမိုးရှင်း' },
    { id: 4, icon: <RiHistoryFill size={25} />, link: '/history', title: 'History' },
    { id: 5, icon: <GoLog size={25} />, link: '/game-log', title: 'Game Log' },
  ];

  return (
    <footer className='px-2 px-sm-5 pt-1 rounded-top-4 d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map((item) => (
        <NavLink
          key={item.id}
          className='text-decoration-none text-center text-light'
          to={item.link}
        >
          {item.icon}
          <p>{item.title}</p>
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
