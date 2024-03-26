import React from 'react';
import '../../assets/css/footer.css';
import home from '../../assets/img/home.svg';
import gift from '../../assets/img/gift.svg';
import history from '../../assets/img/history.svg';
import gameLog from '../../assets/img/gameLog.svg';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerAfterLogin = [
    { id: 1, img: home, link: '/', title: 'အိမ်' },
    { id: 2, img: gift, link: '/promotion', title: 'ပရိုမိုးရှင်း' },
    { id: 4, img: history, link: '/history', title: 'History' },
    { id: 5, img: gameLog, link: '/game-log', title: 'Game Log' },
  ];

  return (
    <footer className='px-2 px-sm-5 pt-1 rounded-top-4 d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map((item) => (
        <NavLink
          key={item.id}
          className='text-decoration-none text-center text-light'
          to={item.link}
        >
          <img src={item.img} style={{ width: "30px", height: '30px' }} />
          <p>{item.title}</p>
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
