import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Title from "../components/title"
import withTarget from "../decorators/with-target"

export const Footer = () => (
  <Section>
    <Title>Kontakt</Title>
    <p>Org.nr: 559033-1103</p>

    <p>
      Telefon: <a>076 869 50 20</a>
    </p>

    <p>
      E-post: <a>urban@gryningsljus.se</a>
    </p>

    <p>
      Box 3<br />521 08 Floby
    </p>
  </Section>
)

export default withTarget("kontakt")(Footer)
