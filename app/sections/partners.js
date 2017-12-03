import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Title from "../components/title"
import SubTitle from "../components/sub-title"
import withTarget from "../decorators/with-target"

export const Partners = () => (
  <Section>
    <Title>Samarbetspartners</Title>
    <p>
      Gryningsljus samarbetar med en legitimerad psykoterapeut och handledare. Certifierad inom EMDR
      för vuxna och barn. Specialiserad inom bl. a. traumabehandling samt erfarenhet av
      psykoterapeutisk behandling av flyktingar, krigs- och tortyrskadade vuxna, ungdomar och
      familjer sedan 2008.
    </p>

    <p>
      Ett tätt samarbete med Ållebergsgymnasiet i Falköping där vi har tillgång till en
      specialpedagog som gör personliga besök för att på bästa sätt bemöta och leda den unge in i en
      fungerande skolgång.
    </p>
  </Section>
)

export default withTarget("partners")(Partners)
