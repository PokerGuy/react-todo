export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const SET_LOADING = 'SET_LOADING';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title,
    },
  };
}

export function deleteToDo(_id) {
  return {
    type: DELETE_TODO,
    _id,
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST,
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    isLoading: status,
  };
}
