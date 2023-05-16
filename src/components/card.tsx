import React from "react";
import styled from "styled-components";
import flowersImg from "../images/flower.png";
import namesImg from "../images/names.png";

const Flower = styled.img`
  width: 16rem;
`;

const Name = styled.img`
  width: 20rem;
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Card() {
  return (
    <>
      <TitleContainer>
        <Flower src={flowersImg} alt="flowers" />
        <Name src={namesImg} alt="names" />
      </TitleContainer>
    </>
  );
}

export default Card;