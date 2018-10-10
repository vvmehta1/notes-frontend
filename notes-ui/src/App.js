import React from 'react';
import {Route} from 'react-router-dom'; 
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import {Grid} from 'react-bootstrap';

const App = () => 
<Grid style={{marginTop: "30px"}}>
  <Route path='/' exact component={HomePage} />
  <Route path='/login' exact component={LoginPage} />
</Grid>;

export default App;
