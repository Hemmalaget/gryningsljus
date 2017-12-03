import React, { Children } from "react"
import styled from "styled-components"
import Section from "../../components/section"
import aiai from "./aiai.png"
import kfo from "./kfo.png"

const Preface = styled.p`
  color: #aaa;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`

const Affiliate = styled.img`
  max-width: 8rem;
  max-height: 6rem;
`

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`

const List = ({ children }) => (
  <ListContainer>{Children.map(children, child => <li>{child}</li>)}</ListContainer>
)

export default () => (
  <Section>
    <Preface>I sammarbete med:</Preface>

    <List>
      <Affiliate src={aiai} />
      <Affiliate src={kfo} />
    </List>
  </Section>
)
