import React, { Component } from 'react'
import { withStyles, Grid, Typography, TextField, Button } from "@material-ui/core";
import {Link} from "react-router-dom";

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
          <img src= "" alt="" className = {classes.image}/>
          <Typography variant="h2">
            LOGIN
          </Typography>
          <form>
            <TextField id="email" name="email" type="email" label="email"/>
            <TextField id ="passWord" name="passWord" type="password" label="passWord"/> 
            <Button type="submit" variant="contained" color="primary">Login</Button>
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