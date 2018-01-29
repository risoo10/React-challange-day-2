import React, {Component} from 'react';
import styled from 'styled-components'; 
import Icon from 'react-icons-kit'; 
import {basic_heart} from 'react-icons-kit/linea/basic_heart';

const LikesWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`
const Likes = styled.p`
  font-weight: bold;
  margin-left: 0.3em;
`

class PostLikesPanel extends Component {
    render() {
        return (
            <LikesWrapper>
                <Icon icon={basic_heart} size={20}></Icon>
                <Likes>{this.props.likes + " likes"}</Likes>
            </LikesWrapper>
        );
    }
}

export default PostLikesPanel;
