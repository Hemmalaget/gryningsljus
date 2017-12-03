import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Title from "../components/title"
import withTarget from "../decorators/with-target"

const FooterSection = styled(Section)`
  background: ${props => props.theme.main};
  border-top: 1.3rem solid ${props => props.theme.mainLight};
`

const ContactTable = styled.table`
  font-size: 1.1rem;

  td:first-child {
    font-weight: bold;
    padding-right: 1rem;
  }

  td {
    padding-bottom: 0.5rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export const Footer = () => (
  <FooterSection>
    <Title>Kontakt</Title>

    <ContactTable>
      <tbody>
        <tr>
          <td>Org.nr:</td>
          <td>559033-1103</td>
        </tr>
        <tr>
          <td>Telefon: </td>
          <td>
            <a href="tel:+46768695020">076 869 50 20</a>
          </td>
        </tr>
        <tr>
          <td>E-post: </td>
          <td>
            <a href="mailto:urban@gryningsljus.se">urban@gryningsljus.se</a>
          </td>
        </tr>
        <tr>
          <td>Adress: </td>
          <td>Box 3, 521 08 Floby</td>
        </tr>
      </tbody>
    </ContactTable>
  </FooterSection>
)

export default withTarget("kontakt")(Footer)
