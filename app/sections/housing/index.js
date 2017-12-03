import React from "react"
import Section from "../../components/section"
import Title from "../../components/title"
import SubTitle from "../../components/sub-title"
import withTarget from "../../decorators/with-target"
import Carousel from "../../components/carousel"
import kitchen from "./kitchen.jpg"
import livingroom from "./livingroom.jpg"
import room from "./room.jpg"

export const Housing = () => (
  <Section>
    <Title>Vårt boende</Title>

    <p>
      Centralt beläget i Floby, Falköpings kommun. Närheten till kollektivtrafik gör det enkelt för
      våra ungdomar att resa och bekanta sig med närområdet med dagliga förbindelser till både
      Skövde och Göteborg. Detta möjliggör för ungdomarna att skapa ett socialt kontaktnät utanför
      boendet samt bibehålla kontakt med för dem viktiga personer.
    </p>

    <p>
      Vi på Gryningsljus ser det som en självklarhet att värna om ungdomens ursprungskultur. Vår
      personal är från flera olika kulturer med språkkunskaper i bl.a. dari, arabiska, persiska och
      kurdiska. Även måltider är planerade utifrån ett mångkulturellt perspektiv.
    </p>

    <p>
      Aktiviteter bestäms av ungdomarna själva under vägledning av personal. Vi har dagliga
      aktiviteter och enstaka längre resor med trevliga resmål. I dygnsavgiften så ingår allt som
      behövs för den dagliga livsföringen och fritidsaktiviteter.
    </p>

    <p>
      Gryningsljus är ett privatägt boende för ensamkommande flyktingungdomar. Vi erbjuder ett
      nybyggt boende med aktiviteter och meningsfull tillvaro med personal som brinner för att skapa
      en professionell relation och integrera den unge mot en god start och ett fortsatt liv i
      Sverige.
    </p>

    <p>
      Med endast nio platser och hög personaltäthet inklusive vaken natt så erbjuds var och en
      mycket tid och omsorg. Vi bemöter alla ungdomar utifrån deras individuella behov och jobbar
      med att stärka de resurser som redan finns samt utveckla nya. Kärnan i vår verksamhet bygger
      på respekt, delaktighet, helhetssyn och trygghet.
    </p>

    <p>Vi erbjuder även eftervård enligt överenskommelse.</p>

    <SubTitle>Våra målsättningar är:</SubTitle>

    <ul>
      <li>
        Att den unge ges förutsättningar för en individuell utveckling och aktivt integrationsarbete
        där de trivs, känner trygghet och möts med respekt och värdighet.
      </li>

      <li>
        Att ha nöjda uppdragsgivare genom att vara en tydlig och attraktiv samarbetspartner som står
        för omsorg av hög kvalitet.
      </li>

      <li>
        Att för vår personal vara en attraktiv arbetsgivare med bra bemanning, rätt kompetens och
        utvecklingsinriktat ledarskap där varje medarbetare kan utvecklas och påverka arbetet.
      </li>
    </ul>

    <Carousel>
      <img src={kitchen} />
      <img src={livingroom} />
      <img src={room} />
    </Carousel>
  </Section>
)

export default withTarget("boende")(Housing)
