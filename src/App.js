import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ComponentLogin from './login';
import ComponentSignup from './signup';
import ComponentDetail from './detail';
import ComponentList from './list';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ComponentLogin} />
            <Route path='/signup' component={ComponentSignup} />
            <Route  path='/list' component={ComponentList} />
            <Route path='/detail/:id' component={ComponentDetail} />
        </Switch>
      </BrowserRouter>
   )
  }
}


export default App;
