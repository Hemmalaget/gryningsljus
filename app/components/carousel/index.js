import React from "react"
import styled from "styled-components"
import createReactClass from "create-react-class"
import Carousel from "nuka-carousel"

const NavButton = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 3rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.5);
  height: 100%;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.2);
  }
`

const decorators = [
  {
    component: createReactClass({
      render() {
        return <NavButton onClick={this.props.previousSlide}>❮</NavButton>
      }
    }),
    position: "TopLeft",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0
    }
  },
  {
    component: createReactClass({
      render() {
        return <NavButton onClick={this.props.nextSlide}>❯</NavButton>
      }
    }),
    position: "TopRight",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0
    }
  }
]

export default createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel
        autoplay
        dragging
        swiping
        wrapAround
        speed={700}
        autoplayInterval={4000}
        easing="easeInOutQuad"
        decorators={decorators}>
        {this.props.children}
      </Carousel>
    )
  }
})
