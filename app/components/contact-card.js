import React from "react"
import styled from "styled-components"

const Picture = styled.div`
  background-image: ${props => `url(${props.src})`};
  width: 200px;
  height: 200px;
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 500px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: left;
  }
`

const Name = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
`

const Title = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`

const Link = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #00aeef;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export default ({ image, name, title, email, phone, description }) => (
  <div>
    <Top>
      <Picture src={image} />
      <Details>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Link href={"mailto:" + email}>{email}</Link>
        <Link href={"tel:" + phone.replace(/\s/g, "")}>{phone}</Link>
      </Details>
    </Top>
    <p>{description}</p>
  </div>
)
