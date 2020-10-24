import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/screens/home/home';
import Login from '../components/screens/login/login'
import Layout from '../components/common/layout/layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Layout>
    
    
  </BrowserRouter>  
);

export default App;