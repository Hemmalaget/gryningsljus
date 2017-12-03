import React from "react"
import styled from "styled-components"

const Section = styled.div`
  padding: 1.5rem 1rem;
  overflow: auto;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default ({ children }) => <Section>{children}</Section>
