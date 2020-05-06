import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ToDo = ({ title, _id, deleteToDo }) => (
  <ListGroup.Item>
    <Row>
      <Col xs={11}>{title}</Col>
      <Col xs={1}>
        <Button
          variant="danger"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            deleteToDo(_id);
          }}
        >
          Delete
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToDo;
