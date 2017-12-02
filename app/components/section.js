import React from "react"
import styled from "styled-components"

const Section = styled.div`
  padding: 16px;
  overflow: auto;
`

export default ({ children }) => <Section>{children}</Section>