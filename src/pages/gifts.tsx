import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Card from "../components/card"
import Link from "../components/link"
import { ThemeProvider } from "styled-components"
import theme from "../components/theme"
import GlobalStyles from "../components/global"
import styled from "styled-components";
import { faGift, faCopy } from '@fortawesome/free-solid-svg-icons'
import qrCode from "../images/pix.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const pageStyles = {
  color: "#232129",
  padding: 0,
}

const Container = styled.section`
  padding: 2rem 2rem;
`;

const QRCode = styled.img`
  width: 10rem;
  padding: 20px;
`;

const PixContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #45644a;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3270B8;
  color: #FFF;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #5AA6D8;
  };
  &:active {
    background-color: #1E487F;
  }
`


const pixCode = "00020126580014br.gov.bcb.pix01360cdd4f94-32fc-4aed-bb6b-67a5170c1f985204000053039865802BR5920DEBORA GAMBETTA PAIM6009SAO PAULO62070503***630440F1"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <ThemeProvider theme={theme}>
        <Container>
            <Card />
            <Link
              name="Tok&stok"
              icon={faGift}
              url="https://tokstoklista.todocartoes.com.br/111748-casamento-debora-e-phelipe"
            />
            <Link
              name="Magazine Luiza"
              icon={faGift}
              url="https://www.querodecasamento.com.br/lista-de-casamento/debora-phelipe"
            />
            <PixContainer>
                <p>
                    Ou quem quiser pode nos presentear 
                    com um valor para a lua de mel. Segue o pix:
                </p>

                <QRCode src={qrCode} alt="qrcode do pix" />

                <CopyToClipboard text={pixCode}>
                    <Button>
                      <FontAwesomeIcon icon={faCopy} />  Copiar código PIX
                    </Button>
                </CopyToClipboard>
            </PixContainer>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Phelipe & Débora</title>
