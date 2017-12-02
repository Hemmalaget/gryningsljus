import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Menu from "./components/menu"
import Hero from "./sections/hero"

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Menu />
      <Hero>Gryningsljus</Hero>
    </div>
  </ThemeProvider>
)