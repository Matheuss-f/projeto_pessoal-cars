import React from "react";
import DropdownCar from "../Dropdowncar/DropdownCar.js"
import {
  Container,
  ContainerContent,
  ContainerImage,
  Image,
  Description,
  Title,
  Text,
  DropContent,
} from "./styles"


function ContentCar({ title, text, src, isWhite, textBlack }) {

  return (
    <Container isWhite={isWhite}>
      <ContainerContent>
        <ContainerImage>
          <Image src={src} />
        </ContainerImage>
      </ContainerContent>
      <Description>
        <Title>{title}</Title>
        <Text textBlack={textBlack}>{text}</Text>
        <DropContent>
          <DropdownCar />
        </DropContent>
      </Description>
    </Container>
  )
}

export default ContentCar