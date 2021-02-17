import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        cette page n'existe pas! (404 bidule!) 
      <Link to="/">
      Go Home
      </Link>
    </div>
    );
  }
}

export default NotFound;