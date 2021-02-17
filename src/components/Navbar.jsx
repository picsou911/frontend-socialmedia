import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";


class Navbar extends Component {
  render() {
    return (
      <AppBar position="sticky">
          <Toolbar style={{  justifyContent: "center" }}>
            <Button component = {Link} to = '/login' >Login</Button>
            <Button component = {Link} to = '/'>Home</Button>
            <Button component = {Link} to = '/signup'>Signup</Button>
          </Toolbar>
       
      </AppBar>
    )
  }
};

export default(Navbar);