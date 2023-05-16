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
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Info = styled.div`
  color: #7a2c6c;
  padding: 0.5rem 0rem;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <ThemeProvider theme={theme}>
        <Container>
          <Card />
          <Link
            name="Listas de presentes"
            icon={faGift}
            url="/gifts"
          />
          <Link
            name="Confirmação de presença"
            icon={faEnvelope}
            url="https://forms.gle/QHPUzRpxi5x9KLZp6"
          />
          <InfoContainer>
            <Info>
              <FontAwesomeIcon icon={faExclamationTriangle} /> Avisos
            </Info>
            <Info>
              - Traje Esporte fino
            </Info>
            <Info>
               - A cerimônia será em piso de grama. Não aconselhamos usar salto fino.
            </Info>
          </InfoContainer>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </main >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Phelipe & Débora</title>
