import React from 'react';
import '@/main.scss';
import {Switch, Route ,Redirect, NavLink} from 'react-router-dom';
import Home from '@/views/Home';
import Sort from '@/views/Sort';
import User from '@/views/User';
import Vehicle from '@/views/Vehicle';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = "/home" component={ Home }/>
        <Route path = "/sort" component={ Sort }/>
        <Route path = "/user" component={ User }/>
        <Route path = "/vehicle" component={ Vehicle }/>
        <Redirect to = "/home"/>
      </Switch>
      <footer className = "footer">
        <ul>
          <NavLink to= "/home">
            <span></span>
            <b>首页</b>
          </NavLink>
          <NavLink to= "/sort">
            <span></span>
            <b>分类</b>
          </NavLink>
          <NavLink to= "/vehicle">
            <span></span>
            <b>购物车</b>
          </NavLink>
          <NavLink to= "/user">
            <span></span>
            <b>个人中心</b>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default App;
