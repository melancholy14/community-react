import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import postReducer from './slices/postSlice';
import userReducer from './slices/userSlice';
import errorReducer from './slices/errorSlice';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    post: postReducer,
    user: userReducer,
    error: errorReducer,
  });

export default createRootReducer;
