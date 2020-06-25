import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'app/common/Button';
import Input from 'app/common/Input';
import { login } from 'app/store/thunks';

function LoginForm() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(login(id, password));
  };

  const onChange = (field: 'id' | 'password') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    switch (field) {
      case 'id': {
        setId(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
    }
  };

  return (
    <>
      <h2 className="text-lg text-center font-bold">LOGIN</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="login-id"
          label="ID"
          className="my-3"
          value={id}
          onChange={onChange('id')}
        />
        <Input
          id="login-password"
          label="PASSWORD"
          type="password"
          className="my-3"
          value={password}
          onChange={onChange('password')}
        />
        <div className="text-center">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
