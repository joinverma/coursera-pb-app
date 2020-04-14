import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from 'reactstrap';

import classnames from 'classnames';
import MktPositionBarChart from '../MarketPosition';
import GeoGraphicalValue from '../GeographicalValue';
import Welcome from '../Welcome';
import BasicFiltering from '../Reports';
const TopNavigation = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Reports
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Welcome></Welcome>
          <Row>
            <Col sm='12' md='6' lg='6' className='mt-2'>
              <MktPositionBarChart></MktPositionBarChart>
            </Col>
            <Col sm='12' md='6' lg='6' className='mt-2'>
              <GeoGraphicalValue></GeoGraphicalValue>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              <BasicFiltering></BasicFiltering>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TopNavigation;
