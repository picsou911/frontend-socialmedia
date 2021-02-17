import React, { Component } from 'react';
//import Datas from '../FakeData';
import Post from './Post';

class PostList extends Component {
    constructor(props){
       super(props)
       this.state = {
          posts : []
       }
   }
   componentDidMount (){
      fetch ('http://localhost:8000/posts')
        .then(response => response.json())
        .then(data => {this.setState({posts : data })})
   }

    render(){
    
       const postComponents =  this.state.posts.map(post => (
             <Post
              key = {'post-'+post.id}
              name = {post.name}
              date = {post.date}
              content = {post.content}
              likes = {post.likes}
              comments = {post.comments}
             />
       ))
        return (
            <div>
            {postComponents}
            </div>
        );
    }
}

export default PostList;