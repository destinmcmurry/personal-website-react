import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Blurb, Timeline, Projects, Misc } from './components';

const Routes = props => {
  return (
    <Switch>
      <Route path='/blurb' component={Blurb} />
      <Route path='/timeline' component={Timeline} />
      <Route path='/projects' component={Projects} />
      <Route path='/misc' component={Misc} />
    </Switch>
  )
}

export default Routes;