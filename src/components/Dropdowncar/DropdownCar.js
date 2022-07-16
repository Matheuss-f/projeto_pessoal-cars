import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons"
import styles from "./DropdownCar.module.css"

function DropdownCar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown_car}>
      <div
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className={styles.dropdown_car__title}>Informações <CaretDownOutlined /></h2>
      </div>

      {isOpen && (
        <>
          <div className={styles.dropdown_car__container_image}>
            <ul className={styles.dropdown_car__container_image__content}> 
              <li>Valor:</li>
              <li>Ano:</li>
              <li>Fabricante:</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default DropdownCar