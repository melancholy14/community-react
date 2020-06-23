import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="h-16 w-full flex justify-between items-center text-3xl font-bold px-6 bg-purple-700 text-white shadow-lg">
      <Link to="/">Posts</Link>
      <Link to="/user">Sign Up/In</Link>
    </div>
  );
}

export default Header;
