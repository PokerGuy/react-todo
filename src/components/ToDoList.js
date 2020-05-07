import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import ToDo from './ToDo';

const alphabetize = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = -1;
  if (titleA > titleB) {
    comparison = 1;
  }
  return comparison;
};

const ToDoList = ({ toDoList, deleteToDo }) => {
  if (toDoList.length > 0) {
    return (
      <div>
        <Jumbotron>
          <ListGroup>
            {toDoList.sort(alphabetize).map((toDo, index) => (
              <ToDo key={index} {...toDo} deleteToDo={deleteToDo} />
            ))}
          </ListGroup>
        </Jumbotron>
        <Row>Number of Items: {toDoList.length}</Row>
      </div>
    );
  } else {
    return <div>Nothing to do...</div>;
  }
};

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
