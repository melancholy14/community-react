import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'app/common/Button';
import Input from 'app/common/Input';
import { signup } from 'app/store/thunks';

function SignUpForm() {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(signup(id, name, password));
  };

  const onChange = (field: 'id' | 'name' | 'password') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    switch (field) {
      case 'id': {
        setId(value);
        break;
      }
      case 'name': {
        setName(value);
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
      <h2 className="text-lg text-center font-bold">SIGN UP</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="id"
          label="ID"
          className="my-3"
          value={id}
          onChange={onChange('id')}
        />
        <Input
          id="name"
          label="NAME"
          className="my-3"
          value={name}
          onChange={onChange('name')}
        />
        <Input
          id="password"
          type="password"
          label="PASSWORD"
          className="my-3"
          value={password}
          onChange={onChange('password')}
        />
        <div className="text-center">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
