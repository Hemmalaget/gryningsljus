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
import Employees from "./sections/employees"
import Affiliates from "./sections/affiliates"
import Footer from "./sections/footer"

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
      <Employees />
      <Affiliates />
      <Footer />
    </div>
  </ThemeProvider>
)
