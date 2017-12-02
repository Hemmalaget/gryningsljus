import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Menu from "./components/menu"
import Hero from "./sections/hero"
import Letter from "./sections/letter"
import Housing from "./sections/housing"
import Operation from "./sections/operation"
import Personel from "./sections/personel"
import Partners from "./sections/partners"

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Menu />
      <Hero>Gryningsljus</Hero>
      <Letter />
      <Housing />
      <Operation />
      <Personel />
      <Partners />
    </div>
  </ThemeProvider>
)
