import React from 'react';
import ReactDOM from 'react-dom';
//import PostList from './components/PostList';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {<Navbar/>}
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/login' component = {Login}/>
        <Route path='/signup' component = {Signup}/>
        <Route component={NotFound} />
      </Switch>
     
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
