import React from "react";
import AdvancedButton from "./components/AdvancedButton/AdvancedButton";
import ContainerCar from "./components/ContainerCar/ContainerCar";
import ModalImages from "./components/ModalImages/ModalImages";


function App() {

  return(
    <div className="container">
      <ContainerCar />
      <AdvancedButton />
      <ModalImages />
    </div>
  )
}

export default App