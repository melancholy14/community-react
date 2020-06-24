import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from 'app/store/selectors';

function Header() {
  const { name } = useSelector(selectUser);

  return (
    <div className="fixed top-0 h-16 w-full flex justify-between items-center text-3xl font-bold px-6 bg-purple-700 text-white shadow-lg">
      <Link to="/">Posts</Link>
      {name && <p>{`Hello, ${name}`}</p>}
      {!name && <Link to="/user">Sign Up/In</Link>}
    </div>
  );
}

export default Header;
