import React from 'react'
import '../../assets/css/footer.css'
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoIosPaper } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const footerAfterLogin = [
    { id: 1, icon: <FaHome />, link: '/', title: "အိမ်" },
    { id: 2, icon: <FaGift />, link: '/promotion', title: "ပရိုမိုးရှင်း" },

    // {id:2,img:deposit,link:'/topup',title:"ငွေသွင်း"},
    // { id: 3, icon: <GrProjects size={20} />, link: '/', title: "", isMiddle: true },
    { id: 4, icon: <FaHistory />, link: '/history', title: "History" },
    { id: 5, icon: <IoIosPaper />, link: '/game-log', title: "Game Log" },

    // {id:4,img:withDraw,link:'/withdraw',title:"ငွေထုတ်"},
  ];
  return (
    <footer className='px-2 px-sm-5 pt-1 rounded-top-4 d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map(item => {
        return <NavLink className={`${item.isMiddle ? 'middleIcon' : ' '} text-decoration-none text-center text-light `} to={item.link}>
          {item.icon}
          <p>{item.title}</p>
        </NavLink>
      })}
    </footer>
  )
}

export default Footer