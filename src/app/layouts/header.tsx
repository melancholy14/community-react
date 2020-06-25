import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'app/store/selectors';
import { logout } from 'app/store/thunks';
import Button from 'app/common/Button';

function Header() {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed top-0 h-16 w-full flex justify-between items-center text-3xl font-bold px-6 bg-purple-700 text-white shadow-lg">
      <Link to="/">Posts</Link>
      {name && (
        <div className="flex items-center">
          <p>{`Hello, ${name}`}</p>
          <Button className="text-base font-bold ml-3" onClick={onLogout}>
            Logout
          </Button>
        </div>
      )}
      {!name && <Link to="/user">Sign Up/In</Link>}
    </div>
  );
}

export default Header;
