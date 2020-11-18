import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/screens/home/home';
import Login from '../components/screens/login/login'
import Layout from '../components/common/layout/layout';
import Register from '../components/screens/register/register'
import PostsList from '../components/screens/posts/postsList'
import PostCreate from '../components/screens/posts/postCreate'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path='/register' component={Register} />
        <Route exact path='/posts/:type' component={PostsList} />
        <Route exact path='/post/create' component={PostCreate} />
      </Switch>
    </Layout>
    
    
  </BrowserRouter>  
);

export default App;