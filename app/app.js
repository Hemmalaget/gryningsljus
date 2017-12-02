import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Menu from "./components/menu"

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Menu />
    </div>
  </ThemeProvider>
)