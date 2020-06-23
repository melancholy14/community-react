import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from 'app/layouts/header';

import User from 'app/pages/user';
import Post from 'app/pages/post';
import PostList from 'app/pages/postList';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'app/store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/new">
          <Post />
        </Route>
        <Route exact path="/:id/:type">
          <Post />
        </Route>
        <Route exact path="/">
          <PostList />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
