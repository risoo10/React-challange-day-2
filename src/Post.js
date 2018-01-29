import React, {Component} from 'react';
import styled from 'styled-components';
import {Avatar, H1, H3} from './Layout';
import PostLikesPanel from './PostLikesPanel'
import PostComments from "./PostComments";

const PostWrapper = styled.div`
  border: ${props => props.theme.baseBorder};
  border-radius: ${props => props.theme.baseRadius};
  background-color: white;
  margin-bottom: 2em;
`
const PostAutorWrapper = styled.div`
  width: 95%;
  padding: 2.5%;
  display: flex;
  align-items: center;
`

const PostAvatar = Avatar.extend`
  margin-right: 1em;
`

const PostImage = styled.img`
  width: 100%;
  height: auto;
`

const PostSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`



const PostAuthor = styled.p`
  margin-top: 1em;
  font-weight: bold;
`

const PostStatus = styled.p`
  margin-bottom: 1em;
  margin-top: 0.3em;
`

class Post extends Component {
    render() {
        return (
            <PostWrapper>
                <PostAutorWrapper>
                    <PostAvatar src="avatar-1.jpg" alt={this.props.post.author}></PostAvatar>
                    <H1>{this.props.post.author}</H1>
                </PostAutorWrapper>
                <PostImage src={this.props.post.imagePath}></PostImage>
                <PostSocialWrapper>
                    <PostLikesPanel likes={this.props.post.likes}></PostLikesPanel>
                    <PostAuthor>{this.props.post.author}</PostAuthor>
                    <PostStatus>{this.props.post.postText}</PostStatus>
                    <H3>Comments</H3>
                    <PostComments comments={this.props.post.comments}></PostComments>
                    <H3>{this.props.post.time}</H3>


                </PostSocialWrapper>
            </PostWrapper>
        );
    }
}


export default Post;
