import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0px auto;
`

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
`

export const H1 = styled.h1`
  font-size: ${props => props.theme.baseFontSize};
  color: ${props => props.theme.brandBlack};
  font-weight: bold;
`

export const H3 = styled.p`
  color: ${props => props.theme.brandGrey};
  text-transform: uppercase;
  font-size: ${props => props.theme.smallFontSize};
`