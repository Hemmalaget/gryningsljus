import React from "react"
import styled from "styled-components"

const Section = styled.div`
  padding: 1.5rem 1rem;
`

const Content = styled.div`
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default ({ children, className }) => (
  <Section className={className}>
    <Content>{children}</Content>
  </Section>
)
