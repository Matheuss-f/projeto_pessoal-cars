import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons"
import styles from "./DropdownCar.module.css"


function DropdownCar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown_car}>
      <div className="dropwdown-car__inner" onClick={() => setIsOpen(!isOpen)}>
        <h2>Olá <CaretDownOutlined /></h2>
      </div>

      {isOpen && (
        <div>Abriu</div>
      )}
    </div>
  )
}

export default DropdownCar