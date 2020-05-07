import {
  ADD_TODO,
  DELETE_TODO,
  RENDER_TODO_LIST,
  SET_LOADING,
} from '../actions';

const initialState = {
  toDoList: [],
  loading: false,
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList,
      };
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ];
      return {
        ...state,
        toDoList: newToDoList,
      };
    case DELETE_TODO:
      let filteredToDoList = state.toDoList.filter(
        (todo) => todo._id !== action._id
      );
      return {
        ...state,
        toDoList: filteredToDoList,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };
    default:
      return state;
  }
}
