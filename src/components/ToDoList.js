import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
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

const ToDoList = ({ toDoList, deleteToDo }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.sort(alphabetize).map((toDo, index) => (
        <ToDo key={index} {...toDo} deleteToDo={deleteToDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

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
