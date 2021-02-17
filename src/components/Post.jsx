import React, { Component } from 'react';
import {Card,CardContent, Typography, withStyles } from '@material-ui/core';

const styles = {
    view : {
        display: 'flex',
        alignItems : 'center',
        marginTop : '3%',
        maxWidth : '65%'
    }
}

class Post extends Component {
    render() {
    const {classes} = this.props
        return (
            <div>
                <Card variant="outlined" className={classes.view}>
                    <img src={this.props.image} alt="profile" />
                    <CardContent>
                        <Typography variant="h5" color="primary" className="name">{this.props.name}</Typography>
                        <Typography variant="caption" className="date">{this.props.date}</Typography>
                        <Typography className="content">{this.props.content}</Typography>
                        <Typography color="primary" className="likes">{this.props.likes}</Typography>
                        <Typography color="primary" className="comments">{this.props.comments}</Typography>
                    </CardContent>
               </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Post);