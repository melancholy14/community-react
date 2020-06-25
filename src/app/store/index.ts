import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import displayError from '../middlewares/displayError';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: getDefaultMiddleware().concat([
    routerMiddleware(history),
    displayError,
  ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
