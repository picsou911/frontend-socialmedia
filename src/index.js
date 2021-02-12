import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/PostList';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import login from "./pages/login";
import Signup from "./pages/Signup";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/login' component = {login}/>
        <Route exact path='/signup' component = {Signup}/>
      </Switch>
      {/* <PostList/> */}
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
