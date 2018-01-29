import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from './Layout';
import Icon from 'react-icons-kit'
import {basic_compass} from 'react-icons-kit/linea/basic_compass'
import {basic_heart} from 'react-icons-kit/linea/basic_heart'
import {basic_lightbulb} from 'react-icons-kit/linea/basic_lightbulb'
import {arrows_circle_remove} from 'react-icons-kit/linea/arrows_circle_remove'



const SearchWrapper = styled.div`
  border-radius: ${props => props.theme.baseRadius};
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  padding: 5px 10px;
  border: ${props => props.theme.baseBorder};
`

const SearchInput = styled.input`
  width: 100%;
  border: 0px;
  margin-right: 0.5em;
`

class SearchBox extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    onSearchValueChange(event){
        const value = event.target.value
        this.setState({
            searchValue: value
        })
    }

    clearSearch(){
        this.setState({
            searchValue: ''
        })
    }

    render() {
        return (
            <SearchWrapper>
                <SearchInput
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChange={(event) => this.onSearchValueChange(event)}
                ></SearchInput>
                {this.state.searchValue !== ''
                    ? <Icon onClick={() => this.clearSearch()} size={24} icon={arrows_circle_remove}></Icon>
                    : null
                }
            </SearchWrapper>
        );
    }


}

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 5px 0;
  border: ${props => props.theme.baseBorder};
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 200px;
  height: auto;
`

const MyIcon = styled(Icon)`
  margin-right: 1.5em;
`

class HeaderPanel extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Container>
                    <Flex>
                        <Logo src="logo.png" alt="Logo"></Logo>
                        <SearchBox></SearchBox>
                        <div>
                            <a href="#"><MyIcon size={28} icon={basic_compass}></MyIcon></a>
                            <a href="#"><MyIcon size={28} icon={basic_heart}></MyIcon></a>
                            <a href="#"><MyIcon size={28} icon={basic_lightbulb}></MyIcon></a>
                        </div>
                    </Flex>
                </Container>
            </HeaderWrapper>
        );
    }
}

export default HeaderPanel;
