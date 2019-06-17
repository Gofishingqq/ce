import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Pr from '@/components/common/Pr'
function Details () {
  return (
      <Switch>
        <Route path="/details/:id" component={ Pr }/>
      </Switch>
  )
}
export default Details;