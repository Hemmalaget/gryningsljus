import React from "react"
import styled from "styled-components"

const NavBar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 6px solid ${props => props.theme.main};

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`

const NavItem = styled.li`
  padding: 10px;
  text-align: center;
`

const Logo = NavItem.extend`
  margin-right: auto;
`

export default () => 
  <NavBar>
    <Logo>Gryningsljus</Logo>
    <NavItem>Start</NavItem>
    <NavItem>Boende</NavItem>
    <NavItem>Verksamhet</NavItem>
    <NavItem>Partners</NavItem>
    <NavItem>Anställda</NavItem>
    <NavItem>Kontakt</NavItem>
  </NavBar>