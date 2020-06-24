import React from 'react';

import Container from 'app/layouts/container';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function User() {
  return (
    <Container>
      <div className="w-2/3 m-auto pt-6 flex">
        <div className="border-r border-purple-600 w-1/2 p-6">
          <SignUpForm />
        </div>
        <div className="w-1/2 p-6">
          <LoginForm />
        </div>
      </div>
    </Container>
  );
}

export default User;
