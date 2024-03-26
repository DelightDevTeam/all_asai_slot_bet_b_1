import React, { useState } from 'react';
import '../../assets/css/tab.css';
import Carouselslidetwo from './Carouselslidetwo';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('sport');

  const tabs = [
    { id: 1, img: home, title: 'home', link: '/' },
    { id: 2, img: casino, title: 'casino', link: '?tab=2' },
    { id: 3, img: lotto, title: 'lotto', link: '?tab=3' },
    { id: 4, img: slot, title: 'slot', link: '?tab=4' },
    { id: 5, img: sport, title: 'sport', link: '?tab=5' },
    { id: 6, img: viber, title: 'viber', link: '/' },
    { id: 7, img: telegram, title: 'telegram', link: '/' },
  ];

  const casinoContents = [];
  const lottoContents = [
    { id: 1, img: lotto1, title: 'lotto1' },
    { id: 2, img: lotto3, title: 'lotto3' },
  ];
  const slotContents = [
    { id: 1, img: slot1, title: 'slot1' },
    { id: 2, img: slot2, title: 'slot2' },
  ];
  const sportContents = [
    { id: 1, img: sport1, title: 'sport1' },
    { id: 2, img: sport2, title: 'sport2' },
  ];

  return (
    <>
      <Tab.Container
        id='left-tabs-example'
        defaultActiveKey={Number(searchParams.get('tab')) || 1}
      >
        <Row>
          <Col xs={3} md={2}>
            <Nav
              variant='pills'
              className='flex-column  pt-4'
              style={{ minHeight: '100vh' }}
            >
              <Nav.Item>
                {tabs.map((tab) => (
                  <Nav.Link
                    onClick={() => setActiveTab(tab.title)}
                    key={tab.id}
                    href={tab.link}
                    eventKey={tab.id}
                    className='tabs'
                  >
                    <img src={tab.img} alt='' className='tab-imgs' />
                    <div className='ms-sm-3 ms-xs-1'>{tab.title}</div>
                  </Nav.Link>
                ))}
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={8} md={10} className='mx-auto'>
            <Tab.Content>
              <Carouselslidetwo></Carouselslidetwo>
              <div className='text-center'>
                <h3 className='text-title'>

                  {activeTab === 'home'
                    ? 'Home'
                    : activeTab === 'casino'
                      ? 'Casino'
                      : activeTab === 'lotto'
                        ? 'Lotto'
                        : activeTab === 'slot'
                          ? 'Slot'
                          : activeTab === 'sport'
                            ? 'Sport'
                            : 'Home'}
                </h3>
              </div>
              <Tab.Pane className='container ' eventKey={2}>
                <div className='row'>
                  {casinoContents.map((data) => (
                    <div
                      key={data.id}
                      className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '
                    >
                      <span>{data.title}</span>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        className='rounded object-fit-contain '
                        src={data.img}
                      />
                    </div>
                  ))}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={4}>
                <div className='row'>
                  {slotContents.map((data) => (
                    <div
                      key={data.id}
                      className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '
                    >
                      <span>{data.title}</span>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        className='rounded object-fit-contain '
                        src={data.img}
                      />
                    </div>
                  ))}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={3}>
                <div className='row'>
                  {lottoContents.map((data) => (
                    <div
                      key={data.id}
                      className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '
                    >
                      <span>{data.title}</span>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        className='rounded object-fit-contain '
                        src={data.img}
                      />
                    </div>
                  ))}
                </div>
              </Tab.Pane>
              <Tab.Pane className='container ' eventKey={5}>
                <div className='row'>
                  {sportContents.map((data) => (
                    <div
                      key={data.id}
                      className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '
                    >
                      <span>{data.title}</span>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        className='rounded object-fit-contain '
                        src={data.img}
                      />
                    </div>
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default HomeTabs;
