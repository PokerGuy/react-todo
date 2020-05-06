import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;
export default () => (
  <NavigationBar>
    <Row className="row">
      <Col>
        <Link className="btn btn-primary" to="/">
          To-Do List
        </Link>
      </Col>
      <Col>
        <Link className="btn btn-secondary" to="/new-item">
          + Add New
        </Link>
      </Col>
    </Row>
  </NavigationBar>
);
