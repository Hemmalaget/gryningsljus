import React from "react"
import styled from "styled-components"

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.7rem 1rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  z-index: 100;
`

const NavItemLink = styled.a`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px;
  text-align: center;

  &:hover,
  &:focus {
    color: ${props => props.theme.main};
    outline: none;
  }
`

const NavItem = ({ to, children }) => (
  <li>
    <NavItemLink href={to}>{children}</NavItemLink>
  </li>
)

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 200;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.main};
    outline: none;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  ${({ vertical }) => vertical && "flex-direction: column;"};
`

const WideNavList = List.extend`
  display: none;
  @media (min-width: 700px) {
    display: flex;
  }
`

const NarrowNavContainer = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`

const NarrowNavList = List.extend`
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
`

const NavButton = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
`

class NarrowNavigation extends React.PureComponent {
  state = {
    isOpen: false
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    return (
      <NarrowNavContainer>
        <NavButton onClick={this.toggleOpen}>☰</NavButton>
        {this.state.isOpen && (
          <NarrowNavList vertical onClick={this.toggleOpen}>
            {this.props.children}
          </NarrowNavList>
        )}
      </NarrowNavContainer>
    )
  }
}

const NavList = ({ children }) => (
  <div>
    <WideNavList>{children}</WideNavList>
    <NarrowNavigation>{children}</NarrowNavigation>
  </div>
)

export default () => (
  <NavBar>
    <Logo href="/">Gryningsljus</Logo>
    <NavList>
      <NavItem to="#start">Start</NavItem>
      <NavItem to="#boende">Boende</NavItem>
      <NavItem to="#verksamhet">Verksamhet</NavItem>
      <NavItem to="#partners">Partners</NavItem>
      <NavItem to="#anställda">Anställda</NavItem>
      <NavItem to="#kontakt">Kontakt</NavItem>
    </NavList>
  </NavBar>
)
