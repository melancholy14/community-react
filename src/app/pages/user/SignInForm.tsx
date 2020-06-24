import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'app/common/Button';
import Input from 'app/common/Input';
import { signin } from 'app/store/thunks';

function SignInForm() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(signin(id, password));
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
      <h2 className="text-lg text-center font-bold">SIGN IN</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="id"
          label="ID"
          className="my-3"
          value={id}
          onChange={onChange('id')}
        />
        <Input
          id="password"
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

export default SignInForm;
