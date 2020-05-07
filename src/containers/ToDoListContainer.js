import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { deleteToDo } from '../actions';

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (_id) => dispatch(deleteToDo(_id)),
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
