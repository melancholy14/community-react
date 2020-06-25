import { MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';
import { setError } from 'app/store/slices/errorSlice';

const displayError = ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => (
  action: { payload: any } & Action
) => {
  if (action.type.endsWith('Failure')) {
    dispatch(setError(action.payload));
  }

  return next(action);
};

export default displayError;
