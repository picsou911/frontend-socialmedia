import React, { Component } from 'react';
import { withStyles, Grid, Typography, TextField, Button } from "@material-ui/core";
import AppIcon from "../images/logo.png";
import {Link} from "react-router-dom";

const styles = {
  title: {
    textAlign: 'center',
  },
  form:{
    marginTop: "15px",
    display: 'inline-block'
  },
  image: {
    marginTop : '15px',
  }
  
}

class Signup extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid container className = {classes.title}>
        {/* <Grid item sm/> */}
        <Grid item xs>
          <img src= {AppIcon} alt="" className = {classes.image}/>
          <Typography variant="h2">
            Sign Up
          </Typography>
          <form className = {classes.form}>
            <div><TextField id="email" name="email" type="email" label="email"/></div>
            <div><TextField id ="passWord" name="passWord" type="password" label="Password"/></div> 
            <div><TextField id ="ConfirmPassWord" name="passWord" type="password" label="Confirm PassWord"/></div> 
            <div><TextField id ="handle" name="handle" type="text" label="Handl"/></div> 
            <Button className = {classes.form} type="submit" variant="contained" color="primary" >SIGN UP</Button>
            <br/>
            <small>
            You have an accounpt ? login <Link to ="/Signup">Here</Link>
            </small>
          </form>

        </Grid>
        {/* <Grid item sm/> */}
      </Grid>
    )
  }
}

export default withStyles(styles)(Signup)