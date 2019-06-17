import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '@/layout/App';
import * as serviceWorker from './serviceWorker';
import Details from './layout/Details';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/details' component={ Details }/>
      <Route path='/' component={ App }/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // 打包时改成 register()
