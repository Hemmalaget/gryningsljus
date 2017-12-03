import React from "react"
import styled from "styled-components"

export default ({ name, title, email, phone, description }) => (
  <div>
    <h3>{name}</h3>
    <p>{title}</p>
    <a>{email}</a>
    <a>{phone}</a>
    <p>{description}</p>
  </div>
)
