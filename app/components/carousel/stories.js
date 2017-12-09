import React from "react"
import { storiesOf } from "@storybook/react"
import Carousel from "./index.js"
import kitchen from "../../sections/housing/kitchen.jpg"
import livingroom from "../../sections/housing/livingroom.jpg"
import room from "../../sections/housing/room.jpg"
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
`

storiesOf("Common", module).add("Carousel", () => (
  <Container>
    <Carousel>
      <img src={kitchen} />
      <img src={livingroom} />
      <img src={room} />
    </Carousel>
  </Container>
))
