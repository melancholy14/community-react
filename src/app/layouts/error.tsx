import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError } from 'app/store/selectors';
import Button from 'app/common/Button';
import { clearError } from 'app/store/slices/errorSlice';

type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  const { message } = useSelector(selectError);

  const dispatch = useDispatch();

  const onClear = () => {
    dispatch(clearError());
  };

  return (
    <>
      {children}
      <div
        className={`fixed top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25 ${
          message ? 'block' : 'hidden'
        }`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 p-6 rounded-lg bg-white">
          <p className="text-3xl">{message}</p>
          <Button className="float-right" onClick={onClear}>
            Dismiss
          </Button>
        </div>
      </div>
    </>
  );
}

export default Error;
