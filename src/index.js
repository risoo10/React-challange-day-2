import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { injectGlobal, ThemeProvider} from 'styled-components'

const theme = {
    brandBlack: 'rgb(38, 38, 38)',
    brandRed: 'rgb(237, 73, 86)',
    brandGrey: 'rgb(153, 153, 153)',
    brandLightGrey: "rgb(230, 230, 230)",
    backgroundColor: "rgb(250, 250, 250)",
    baseFontFamily: "'Roboto', sans-serif,",
    baseFontColor: 'rgb(38, 38, 38)',
    baseFontSize: '16px',
    smallFontSize: "12px",
    fontNormal: 400,
    fontSemibold: 600,
    fontBold: 700,
    baseLineHeight: 1.5,
    baseBorder: '1px solid rgb(230, 230, 230)',
    baseRadius: '0.25rem',
    baseBoxShadow: 'rgba(42, 53, 60, 0.2) 0 0 5px'
}

const StyledApp = styled.div`
  font-family: ${props => props.theme.baseFontFamily};
  font-size: ${props => props.theme.baseFontSize};
  color: ${props => props.theme.baseFontColor};
  background-color: ${props => props.theme.backgroundColor};
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StyledApp>
            <App></App>
        </StyledApp>
    </ThemeProvider>,
    document.getElementById('root'));

injectGlobal`
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  body{
    font-family: 'Roboto', sans-serif;
  }
`