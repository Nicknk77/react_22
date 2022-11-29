import { createStore } from 'redux';
// import { configureStore } from 'reduxjs';
import reducer from './reducers/reducer_1';

const STORE = createStore(reducer);

export default STORE;