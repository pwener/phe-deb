import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Card from "../components/card"
import Link from "../components/link"
import { ThemeProvider } from "styled-components"
import theme from "../components/theme"
import GlobalStyles from "../components/global"
import styled from "styled-components";
import { faGift, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const pageStyles = {
  color: "#232129",
  padding: 0,
}

const Container = styled.section`
  padding: 2rem 2rem;
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
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Phelipe & Débora</title>
