import React, { Component } from "react"
import styled from "styled-components"
import { getDisplayName } from "../utils"

const Container = styled.div`
  position: relative;
`

const Target = styled.div`
  position: absolute;
  top: -70px; // offsets the fixed header
`

export default target => Component => {
  const WithTarget = props => (
    <Container>
      <Target id={target} />
      <Component {...props} />
    </Container>
  )

  WithTarget.displayName = `WithTarget(${getDisplayName(Component)})`

  return WithTarget
}
