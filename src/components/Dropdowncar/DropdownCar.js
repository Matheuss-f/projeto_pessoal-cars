import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons"
import styles from "./DropdownCar.module.css"

function DropdownCar({ src }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown_car}>
      <div
      className="dropwdown-car__inner"
      onClick={() => setIsOpen(!isOpen)}
      > 
        <h2>Ver mais <CaretDownOutlined /></h2>
      </div>

      {isOpen && (
        <>
          <img
          src={src}
          className={styles.dropdown_car__image}
          />
        </>
      )}
    </div>
  )
}

export default DropdownCar