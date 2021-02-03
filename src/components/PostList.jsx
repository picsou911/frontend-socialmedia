import React, { Component } from 'react';
import Datas from '../FakeData';
import Post from './Post';

class PostList extends Component {
    render() {
        let post = Datas[0]
        let post2 = Datas[1]
        return (
            <div>
               <Post
                name = {post.name}
                date = {post.date}
                content = {post.content}
                likes = {post.likes}
                comments = {post.comments}
               /> 
               <Post
                name = {post2.name}
                date = {post2.date}
                content = {post2.content}
                likes = {post2.likes}
                comments = {post2.comments}
               /> 
            </div>
        );
    }
}

export default PostList;