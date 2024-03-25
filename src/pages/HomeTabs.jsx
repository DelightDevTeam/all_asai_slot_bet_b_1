import React from 'react';
import '../assets/css/tab.css';
import Carouselslidetwo from './../components/Layout/Carouselslidetwo';
// import fishbackground from '../../assets/img/fishbackground';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import home from '../assets/img/sidemenu/home.png';
import casino from '../assets/img/sidemenu/casino.png';
import lotto from '../assets/img/sidemenu/lotto.png';
import slot from '../assets/img/sidemenu/slot.png';
import sport from '../assets/img/sidemenu/sport.png';
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

import sport1 from '../assets/img/game/sport1.png';
import sport2 from '../assets/img/game/sport2.png';
import sport3 from '../assets/img/game/sport3.png';
import sport4 from '../assets/img/game/sport4.png';
import sport5 from '../assets/img/game/sport5.png';
import sport6 from '../assets/img/game/sport6.png';

import { useSearchParams } from 'react-router-dom';
import '../assets/css/tab.css';
import { NavLink } from 'react-router-dom';
const HomeTabs = () => {
  const [searchParams] = useSearchParams();
  const tabs = [
    { id: 1, img: home, title: 'All', link: '?tab=1' },
    { id: 2, img: casino, title: 'Casino', link: '?tab=2' },
    { id: 3, img: lotto, title: 'Lotto', link: '?tab=3' },
    { id: 4, img: slot, title: 'Slot', link: '?tab=4' },
    { id: 5, img: sport, title: 'Sport', link: '?tab=5' },
    // { id: 6, img: viber, title: '', link: '/' },
    // { id: 7, img: telegram, title: '', link: '/' }
  ];
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
    <div className='px-2 mt-4'>
      <div className="py-2 px-sm-5">
        <Carouselslidetwo></Carouselslidetwo>
      </div>
      <Tab.Container
        id='left-tabs-example'
        defaultActiveKey={Number(searchParams.get('tab')) || 1}
      >
        <Row>
          <Col xs={2} md={2} lg={1} className=' '>
            <Nav
              variant='pills'
              className='flex-column  pt-4'
              style={{ minHeight: '100vh' }}
            >
              {tabs.map((tab, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                      className='text-decoration-none mb-2 tabs'
                      to={tab.link}
                      eventKey={tab.id}
                    >
                      <img src={tab.img} alt='' className='tab-imgs' />
                      <div>{tab.title}</div>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col xs={9} md={10} className='ps-4 ms-3 ms-sm-0 ms-lg-5 p-0 '>
            <Tab.Content>

              <div className='text-center mt-4 mt-lg-0'>
                <h3 className='text-title'>
                  {searchParams.get('tab') == ''
                    ? 'All Games'
                    : searchParams.get('tab') == 1
                      ? 'All Games'
                      : searchParams.get('tab') == 2
                        ? 'Casino'
                        : searchParams.get('tab') == 3
                          ? 'Lotto'
                          : searchParams.get('tab') == 4
                            ? 'Slot'
                            : searchParams.get('tab') == 5
                              ? 'Sport'
                              : 'Home'}
                </h3>
              </div>
              <Tab.Pane className='container ' eventKey={1}>
                <div className='row'>
                  {homeContents.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className='col-4  p-1 col-md-4 col-lg-3 col-xl-2 my-2 '
                      >
                        <span>{data.title}</span>
                        <img
                          style={{ width: '100%', height: '80%' }}
                          className='rounded  img-fluid   '
                          src={data.img}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={2}>
                <div className='row'>
                  {casinoContents.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className=' col-4  p-1 col-md-4 col-lg-3 col-xl-2 my-2  '
                      >
                        <span>{data.title}</span>
                        <img
                          style={{ width: '100%', height: '80%' }}
                          className='rounded  img-fluid   '
                          src={data.img}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={4}>
                <div className='row'>
                  {slotContents.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className=' col-4  p-1 col-md-4 col-lg-3 col-xl-2 my-2 '
                      >
                        <span>{data.title}</span>
                        <img
                          style={{ width: '100%', height: '80%' }}
                          className='rounded  img-fluid   '
                          src={data.img}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={3}>
                <div className='row'>
                  {lottoContents.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className='col-4  p-1 col-md-4 col-lg-3 col-xl-2 my-2 '
                      >
                        <span>{data.title}</span>
                        <img
                          style={{ width: '100%', height: '80%' }}
                          className='rounded  img-fluid   '
                          src={data.img}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={5}>
                <div className='row'>
                  {sportContents.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className='col-4  p-1 col-md-4 col-lg-3 col-xl-2 my-2 '
                      >
                        <span>{data.title}</span>
                        <img
                          style={{ width: '100%', height: '80%' }}
                          className='rounded  img-fluid   '
                          src={data.img}
                        />
                      </div>
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
