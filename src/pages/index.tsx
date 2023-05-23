import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Card from "../components/card"
import Link from "../components/link"
import { ThemeProvider } from "styled-components"
import theme from "../components/theme"
import GlobalStyles from "../components/global"
import styled from "styled-components";
import { faGift, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const pageStyles = {
  color: "#232129",
  padding: 0,
}

const Container = styled.section`
  padding: 2rem 2rem;
`;

const InfoContainer = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const WarningContainer = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`

const LinksContainer = styled.section`
  margin-top: 2rem;
`

const Info = styled.div`
  color: #E42F29;
  padding: 0.5rem 0rem;
`;

const Text = styled.div`
  color: #45644A;
  padding: 0.5rem 0rem;
  max-width: 25rem;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <ThemeProvider theme={theme}>
        <Container>
          <Card />
          <InfoContainer>
            <Text>
              Querido(a) convidado(a), seja bem vindo(a) ao nosso site de casamento!
              Deixamos aqui todas as informações importantes para que esse dia seja especial para você, assim como será para nós.
            </Text>
            <Text>
              Esperamos você lá.
            </Text>
          </InfoContainer>
          <LinksContainer>
            <Link
              name="Confirmação de presença"
              icon={faEnvelope}
              url="https://forms.gle/QHPUzRpxi5x9KLZp6"
            />
            <Link
              name="Listas de presentes"
              icon={faGift}
              url="/gifts"
            />
          </LinksContainer>
          <WarningContainer>
            <Info>
              <FontAwesomeIcon icon={faExclamationTriangle} /> Avisos
            </Info>
            <Info>
              - Traje Esporte fino
            </Info>
            <Info>
              - A cerimônia será em piso de grama. Não aconselhamos usar salto fino.
            </Info>
          </WarningContainer>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </main >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Phelipe & Débora</title>
