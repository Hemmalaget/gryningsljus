import React from "react"
import Section from "../../components/section"
import ContactCard from "../../components/contact-card"
import withTarget from "../../decorators/with-target"
import pa from "./per-arne.jpg"
import Title from "../../components/title"

export const Employees = () => (
  <Section>
    <Title>Vi på Gryningsljus</Title>
    <ContactCard
      name="Per-Arne Hederstaf"
      title="Verksamhetschef"
      email="per-arne@gryningsljus.se"
      phone="076 869 50 00"
      description="Per-Arne har sedan 2001 engagerat sig i socialt arbete med i nära anknytning till funktionshindrade och startade 2010 Hemmalaget Assistans AB. Det känns naturligt att stötta individer med olika behov i syfte att leva så självständigt som möjligt. Som ett led i att utveckla möjligheterna för andra, köptes en fastighet i Floby sommaren 2012 för att starta HVB Hem. Per-Arne har helhetsansvaret för verksamheten. Han har studerat på Högskola, bland annat inom ekonomi, socialrätt och beteendevetenskap. Frihet för Per-Arne är att kravlöst dra iväg med husbil några veckor och njuta av Sveriges vackra natur."
      image={pa}
    />
  </Section>
)

export default withTarget("anställda")(Employees)
