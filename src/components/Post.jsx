import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="name">{this.props.name}</div>
        <div className="date">{this.props.date}</div>
        <div className="content">{this.props.content}</div>
        <div className="likes">{this.props.likes}</div>
        <div className="comments">{this.props.comments}</div>
      </div>
    );
  }
}

export default Post;

// export class Post extends Component {
//   render() {
//     return (
//       <div>
//         <div className="name">{this.props.name}</div>
//         <div className="date">{this.props.date}</div>
//         <div className="content">{this.props.content}</div>
//         <div className="likes">{this.props.likes}</div>
//         <div className="comments">{this.props.comments}</div>
//       </div>
//     );
//   }
// }
