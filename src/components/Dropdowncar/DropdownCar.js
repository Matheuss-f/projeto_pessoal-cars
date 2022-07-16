import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons"
import styles from "./DropdownCar.module.css"

function DropdownCar({ src }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown_car}>
      <div
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className={styles.drpdown_car__title}>Ver mais <CaretDownOutlined /></h2>
      </div>

      {isOpen && (
        <>
          <div className={styles.dropdown_car__container_image}>
            <iframe
              src={src}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default DropdownCar