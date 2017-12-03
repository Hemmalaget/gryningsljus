import React from "react"
import styled from "styled-components"
import withTarget from "../../decorators/with-target"
import ukuleleNarrow from "./ukulele-narrow.jpg"
import ukuleleNarrow2x from "./ukulele-narrow@2x.jpg"
import ukulele from "./ukulele.jpg"
import ukulele2x from "./ukulele@2x.jpg"
import ukuleleWide from "./ukulele-wide.jpg"
import ukuleleWide2x from "./ukulele-wide@2x.jpg"

const HeroContainer = styled.div`
  margin-top: 61px;
  overflow: auto;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${ukuleleNarrow2x});
  }
  background-image: url(${ukuleleNarrow});
  background-position: center;
  height: 100vw;

  @media (min-width: 450px) {
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${ukulele2x});
    }
    background-image: url(${ukulele});
    height: 60vw;
    background-position-x: right;
    background-position-y: center;
  }

  @media (min-width: 900px) {
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${ukuleleWide});
    }
    background-image: url(${ukuleleWide2x});
    height: 40vw;
    background-position-y: top;
  }
`

const Title = styled.h1`
  font-weight: 200;
  font-size: 60px;
  margin: 0;
`

export const Hero = ({ children }) => <HeroContainer />

export default withTarget("start")(Hero)
