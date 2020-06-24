import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import postListReducer from './slices/postListSlice';
import postReducer from './slices/postSlice';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    // postList: postListReducer,
    post: postReducer,
  });

export default createRootReducer;
