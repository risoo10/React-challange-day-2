import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from "./Layout"
import Post from "./Post";

const PostsWrapper = Container.extend`
  padding: 2em 2em;
  max-width: 600px;
`

class PostsPanel extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [
                {
                    author: 'travisnielson',
                    imagePath: 'post-image.jpg',
                    time: '15 minutes ago',
                    likes: 1546,
                    postText: "Hey Yaaaa. Enjoying this sunset #love",
                    comments: [
                        {
                            comment: "Nice photo",
                            author: "niki64",
                        },
                        {
                            comment: "Pretty sunset abovee",
                            author: "john_mack",
                        },
                        {
                            comment: "Thanks",
                            author: "travisnielson",
                        },
                    ]
                },
                {
                    author: 'riki_man32',
                    imagePath: 'post-image.jpg',
                    time: '1 hour ago',
                    likes: 213,
                    postText: "Hey Yaaaa. Enjoying this sunset #love",
                    comments: [
                        {
                            comment: "Nice photo",
                            author: "niki64",
                        },
                        {
                            comment: "Pretty sunset abovee",
                            author: "john_mack",
                        },
                        {
                            comment: "Thanks",
                            author: "travisnielson",
                        },
                    ]
                },
                {
                    author: 'patrisia_mou',
                    imagePath: 'post-image.jpg',
                    time: '5 hours ago',
                    likes: 56,
                    postText: "Hey Yaaaa. Enjoying this sunset #love",
                    comments: [
                        {
                            comment: "Nice photo",
                            author: "niki64",
                        },
                        {
                            comment: "Pretty sunset abovee",
                            author: "john_mack",
                        },
                        {
                            comment: "Thanks",
                            author: "travisnielson",
                        },
                    ]
                },
            ]
        }
    }


    render() {
        return (
            <PostsWrapper>
                {this.state.posts.map(post =>
                    <Post post={post}></Post>
                )}
            </PostsWrapper>
        );
    }
}

export default PostsPanel;
