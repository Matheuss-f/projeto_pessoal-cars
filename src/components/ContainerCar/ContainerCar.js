import React from "react";
import DropdownCar from "../Dropdowncar/DropdownCar";
import Car1 from '../../assets/images/car1.jpg'
import Car2 from '../../assets/images/car2.jpeg'
import Car3 from '../../assets/images/car3.jpg'
import Car4 from '../../assets/images/car4.jpg'
import Car5 from '../../assets/images/car5.jpg'
import styles from "./ContainerCar.module.css"

function ContainerCar() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__inner}>
         <h1 className={styles.container__inner__title}>Teste Imagens</h1>
         <DropdownCar src={Car1} />
         <DropdownCar src={Car2} />
         <DropdownCar src={Car3} />
         <DropdownCar src={Car4} />
         <DropdownCar src={Car5} />
        </div>
      </div>
    </>
  )
}

export default ContainerCar