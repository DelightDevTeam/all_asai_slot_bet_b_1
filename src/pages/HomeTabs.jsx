import React, { useState } from 'react';
import '../assets/css/tab.css';
import Carouselslidetwo from './../components/Layout/Carouselslidetwo';
// import fishbackground from '../../assets/img/fishbackground';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import home from '../assets/img/sidemenu/home2.png';
import casino from '../assets/img/sidemenu/casino2.png';
import lotto from '../assets/img/sidemenu/lotto2.png';
import slot from '../assets/img/sidemenu/slot2.png';
import sport from '../assets/img/sidemenu/sport2.png';
import viber from '../assets/img/sidemenu/viber.png';
import telegram from '../assets/img/sidemenu/telegram.png';

import casino1 from '../assets/img/game/casino1.png';
import casino2 from '../assets/img/game/casino2.png';
import casino3 from '../assets/img/game/casino3.png';
import casino4 from '../assets/img/game/casino4.png';
import casino5 from '../assets/img/game/casino5.png';
import casino6 from '../assets/img/game/casino6.png';

import lotto1 from '../assets/img/game/lotto1.png';
import lotto3 from '../assets/img/game/lotto3.png';
import sagames from '../assets/img/game/sagames.png';
import slot1 from '../assets/img/game/slot1.png';
import slot2 from '../assets/img/game/slot2.png';
import slot3 from '../assets/img/game/slot3.png';
import slot4 from '../assets/img/game/slot4.png';
import slot5 from '../assets/img/game/slot5.png';
import slot6 from '../assets/img/game/slot6.png';
import { AiFillSound } from "react-icons/ai";

import sport1 from '../assets/img/game/sport1.png';
import sport2 from '../assets/img/game/sport2.png';
import sport3 from '../assets/img/game/sport3.png';
import sport4 from '../assets/img/game/sport4.png';
import sport5 from '../assets/img/game/sport5.png';
import sport6 from '../assets/img/game/sport6.png';

import { Link, useSearchParams } from 'react-router-dom';
import '../assets/css/tab.css';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('home');
  const {data: gameTypes} = useFetch(BASE_URL + "/gameType");
  const {data:bannerText} = useFetch(BASE_URL+"/bannerText");
 
  const slots = gameTypes[0]?.products;
  const slotCode = gameTypes[0]?.code;
  const casinos = gameTypes[1]?.products;
  const casinoCode = gameTypes[1]?.code;
  const sports = gameTypes[2]?.products;
  const sportCode = gameTypes[2]?.code;
  const fishes = gameTypes[3]?.products;
  const fishCode = gameTypes[3]?.code;

  const lauchGame = (productCode, gameTypeCode) => {
    let gameData = {
      productId: productCode,
      gameType: gameTypeCode
    }
    fetch(BASE_URL + "/game/Seamless/LaunchGame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify(gameData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Launch Game failed");
        }
        console.log("Launch Game success");
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        // window.location.href = data.data;
        window.open(data.Url, '_blank');
      })
      .catch((error) => {
        console.error("Launch Game error:", error);
      });
  }



  const homeContents = [
    { id: 1, img: casino1, title: 'casino1' },
    { id: 2, img: slot1, title: 'slot1' },
    { id: 3, img: slot2, title: 'slot2' },
    { id: 4, img: lotto1, title: 'lotto1' },
    { id: 5, img: lotto3, title: 'lotto3' },
    { id: 6, img: sport1, title: 'sport1' },
    { id: 7, img: sport2, title: 'sport2' },
  ];
  const casinoContents = [
    { id: 1, img: casino1, title: 'casino1' },
    { id: 2, img: casino2, title: 'casino2' },
    { id: 3, img: casino3, title: 'casino3' },
    { id: 4, img: casino4, title: 'casino4' },
    { id: 5, img: casino5, title: 'casino5' },
    { id: 6, img: casino6, title: 'casino6' },
  ];
  const lottoContents = [
    { id: 1, img: lotto1, title: 'lotto1' },
    { id: 2, img: lotto3, title: 'lotto3' },
  ];
  const slotContents = [
    { id: 1, img: slot1, title: 'slot1' },
    { id: 2, img: slot2, title: 'slot2' },
    { id: 3, img: slot3, title: 'slot3' },

    { id: 4, img: slot4, title: 'slot4' },
    { id: 5, img: slot5, title: 'slot5' },
    { id: 6, img: slot6, title: 'slot6' },
  ];
  const sportContents = [
    { id: 1, img: sport1, title: 'sport1' },
    { id: 2, img: sport2, title: 'sport2' },
    { id: 3, img: sport3, title: 'sport3' },
    { id: 4, img: sport4, title: 'sport4' },
    { id: 5, img: sport5, title: 'sport5' },
    { id: 6, img: sport6, title: 'sport6' },
  ];

  return (
    <div className='px-2 mt-sm-4'>
      <div className="pt-2 px-sm-5">
        <Carouselslidetwo></Carouselslidetwo>
        <div className="marqueeContainer mt-1 mt-sm-0 mb-sm-2">
          <AiFillSound className='sound' />
          <marquee className='' >
            <span>{bannerText?.text}</span>
          </marquee>
        </div>
      </div>
      <Tab.Container
        id='left-tabs-example'
        defaultActiveKey={0}
      >
        <Row>
          <Col xs={2} md={2} lg={1} className=' '>
            <Nav
              variant='pills'
              className='flex-column  pt-4 mt-1'
              style={{ minHeight: '100vh' }}
            >
              <Nav.Item>
                <Nav.Link
                  onClick={() => setActiveTab("All")}
                  className='text-decoration-none mb-2 tabs d-flex align-items-center justify-content-start gap-1 gap-sm-2'
                  eventKey={0}
                >
                  <img src={home} alt='' className='tab-imgs' />
                  <div>All</div>
                </Nav.Link>
              </Nav.Item>
              {gameTypes && gameTypes.map((tab, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                      onClick={() => setActiveTab(tab.name)}
                      className='text-decoration-none mb-2   tabs d-flex align-items-center gap-1 gap-sm-2'
                      // to={tab.link}
                      eventKey={tab.id}
                    >
                      <img src={tab.img_url} alt='' className='tab-imgs' />
                      <div>{tab.name}</div>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col xs={9} md={10} className='ps-4 ms-3 ms-sm-0 ms-lg-5 p-0 '>
            <Tab.Content>

              <div className='text-center mt-1 mt-lg-0'>
                <h3 className='text-title mb-2 '>
                  {activeTab === 'All'
                    ? 'All Games'
                    : activeTab === 'Live Casino'
                      ? 'Live Casino'
                      : activeTab === 'Slot'
                        ? 'Slot'
                        : activeTab === 'Sport Book'
                          ? 'Sport Book'
                          : activeTab === 'Fishing'
                            ? 'Fishing'
                            : 'All Games'}
                </h3>
              </div>

              {/* all */}
              <Tab.Pane className='container ' eventKey={0}>
                <div>
                  <div className="mb-3 mb-md-5 row">
                  {slots && slots.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, slotCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                  </div>
                  <div className="mb-3 mb-md-5 row">
                  {casinos && casinos.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, casinoCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                  </div>
                  <div className="mb-3 mb-md-5 row">
                  {sports && sports.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, sportCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                  </div>
                  <div className="mb-3 mb-md-5 row">
                  {fishes && fishes.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, fishCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                  </div>
                </div>
              </Tab.Pane>
              {/* slots */}
              <Tab.Pane className='container ' eventKey={1}>
                <div className='row'>
                  {slots && slots.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, slotCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                </div>
              </Tab.Pane>
              {/* live casino */}
              <Tab.Pane className='container ' eventKey={2}>
                <div className='row'>
                  {casinos && casinos.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, casinoCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                </div>
              </Tab.Pane>
              {/* sportbooks */}
              <Tab.Pane className='container ' eventKey={3}>
                <div className='row'>
                  {sports && sports.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, sportCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                </div>
              </Tab.Pane>
              {/* fishing */}
              <Tab.Pane className='container ' eventKey={4}>
                <div className='row'>
                  {fishes && fishes.map((data, index) => {
                    return (
                      <Link
                        key={index}
                        className='col-4 p-1 col-md-4 col-lg-3 col-xl-2'
                        onClick={()=>lauchGame(data.code, fishCode)}
                      >
                        {/* <span>{data.name}</span> */}
                        <img
                          style={{ width: '100%', height: '100%' }}
                          className='rounded-4  img-fluid   '
                          src={data.imgUrl}
                        />
                      </Link>
                    );
                  })}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default HomeTabs;
