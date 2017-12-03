import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import SubTitle from "../components/sub-title"
import Quote from "../components/quote"

const LetterFooter = styled.div`
  text-align: center;
  border-top: 2px solid ${props => props.theme.main};

  a {
    display: block;
  }
`

export default () => (
  <Section>
    <p>
      En verksamhet med familjär atmosfär som bygger på trygghet och respekt för ensamkommande
      asylsökande och för de som erhållit permanent uppehållstillstånd. Vi tar emot pojkar mellan 14
      – 18 år. Bedriver även utslussning i egen regi med sattelitlägenhet.
    </p>

    <SubTitle>Kvalitet</SubTitle>

    <p>
      Kvalitet för oss är att uppfylla uppdragsgivarnas krav, behov och förväntningar. Men även att
      den ungdom som är placerad hos oss bemöts och behandlas med respekt samt får den vård som
      krävs för att han skall känna trygghet och delaktighet under sin tid hos oss. Vi arbetar
      enligt LEAN.
    </p>

    <SubTitle>Personlig inloggning</SubTitle>

    <p>
      Gryningsljus erbjuder handläggare en personlig inloggning in i vårt journalsystem. Handläggare
      ska på ett enkelt sätt ska kunna följa placeringens utveckling.
    </p>

    <SubTitle>Utslussning</SubTitle>

    <p>Vi erbjuder utslussning i egen regi i form av sattelitlägenheter med boendestöd.</p>

    <Quote
      quote="Tveka inte att ta kontakt om du har frågor kring vår verksamhet."
      name="Per-Arne Hederstaf"
      title="Verksamhetschef"
      phone="076 869 50 50"
      email="per-arne@gryningsljus.se"
    />
  </Section>
)
