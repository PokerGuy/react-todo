import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, SET_LOADING } from '../actions';

const delay = () => new Promise((res) => setTimeout(res, 5000));

export function* fetchToDoList() {
  /* const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json(); */
  yield put({ type: SET_LOADING, isLoading: true });
  const data = yield call(mock);
  console.log('Got the data!');
  console.log(data);
  yield put({ type: SET_LOADING, isLoading: false });
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* mock() {
  yield delay();
  return [
    { _id: 1, title: 'Buy Pizza' },
    { _id: 2, title: 'Watch Netflix' },
    { _id: 3, title: 'Cook Dinner' },
  ];
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
