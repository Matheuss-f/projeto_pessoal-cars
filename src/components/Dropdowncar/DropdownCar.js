import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons"
import {
  DropDownCar,
  ContentTitle,
  Title,
  Container,
  InfoList,
} from "./styles"

function DropdownCar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropDownCar>
      <ContentTitle
        onClick={() => setIsOpen(!isOpen)}
      >
        <Title>Informações <CaretDownOutlined /></Title>
      </ContentTitle>

      {isOpen && (
        <>
          <Container>
            <InfoList> 
              <li>Valor:</li>
              <li>Ano:</li>
              <li>Fabricante:</li>
            </InfoList>
          </Container>
        </>
      )}
    </DropDownCar>
  )
}

export default DropdownCar