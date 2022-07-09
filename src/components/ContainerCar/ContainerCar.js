import React from "react";
import AdvancedButton from "../AdvancedButton/AdvancedButton";
import DropdownCar from "../Dropdowncar/DropdownCar";
import styles from "./ContainerCar.module.css"

function ContainerCar() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__inner}>
                    <AdvancedButton />
                </div>
            </div>
            <DropdownCar />
        </>
    )
}

export default ContainerCar