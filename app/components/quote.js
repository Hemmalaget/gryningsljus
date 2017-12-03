import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  max-width: 800px;
  text-align: center;

  @media (min-width: 700px) {
    justify-content: space-between;
    align-items: center;
  }
`

const Quote = styled.p`
  display: block;
  text-align: center;
  font-size: 1.2rem;
`

const Link = styled.a`
  display: block;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.main};
    outline: none;
`

const Divider = styled.hr`
  width: 100%;
`

export default ({ quote, name, title, phone, email }) => (
  <Container>
    <Divider />
    <Quote>"{quote}"</Quote>
    <div>
      <p>
        {name}, {title}
      </p>
      <Link href={"tel:" + phone.replace(/\s/g, "")}>{phone}</Link>
      <Link href={"mailto:" + email}>{email}</Link>
    </div>
  </Container>
)
