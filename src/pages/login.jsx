import React, { Component } from 'react'
import { withStyles, Grid, Typography, TextField, Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import AppIcon from "../images/logo.png"

const styles = {
  form: {
    textAlign: 'center'
  }
  // TODO : Ajouter le CSS de l'image
}

class login extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid container className = {classes.form}>
        <Grid item sm/>
        <Grid item sm>
          <img src= {AppIcon} alt="" className = {classes.image}/>
          <Typography variant="h2">
            LOGIN
          </Typography>
          <form>
            <div>
            <TextField id="email" name="email" type="email" label="email"/>
            </div>
            <div>
            <TextField id ="passWord" name="passWord" type="password" label="passWord"/> 
            </div>
            <div>
            <Button type="submit" variant="contained" color="primary">Login</Button>
            </div>
            <br/>
            <small>
              Dont have an accounpt ? Signup <Link to ="/Signup">Here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm/>
      </Grid>
    )
  }
}

export default withStyles(styles)(login)