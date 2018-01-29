import React, {Component} from 'react';
import styled from 'styled-components';

const Comment = styled.div`
 margin-bottom: 0.4em;
`

const Author = styled.p`
  display: inline;
  font-weight: bold;
  margin-right: 0.3em;
`
const CommentText = styled.p`
  display: inline;
`

const Wrapper = styled.div`
  margin: 0.4em 0;
`

class PostComments extends Component {
    render() {
        return (
            <Wrapper>
                {this.props.comments.map((comment) =>
                    <Comment>
                        <Author>{comment.author}</Author>
                        <CommentText>{comment.comment}</CommentText>
                    </Comment>
                )}
            </Wrapper>
        );
    }
}


export default PostComments;
