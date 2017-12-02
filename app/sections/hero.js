import React from "react"
import styled from "styled-components"

const Hero = styled.div`
  height: 40%;
  max-height: 500px;
  min-height: 300px;
  overflow: auto;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 200;
  font-size: 60px;
  margin: 0;
`

export default ({children}) => (
  <Hero><Title>{ children }</Title></Hero>
)