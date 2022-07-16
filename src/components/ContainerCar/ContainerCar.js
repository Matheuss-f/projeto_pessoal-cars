import React from "react";
import DropdownCar from "../Dropdowncar/DropdownCar";
import BannerContainerOne from '../../assets/images/banner_container_one.jpg'
import Car1 from '../../assets/images/car1.jpg'
import Car2 from '../../assets/images/car2.jpeg'
import Car3 from '../../assets/images/car3.jpg'
import Car4 from '../../assets/images/car4.jpg'
import Car5 from '../../assets/images/car5.jpg'
import styles from "./ContainerCar.module.css"
import { DownOutlined } from "@ant-design/icons";

function ContainerCar() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__one}>
          <img src={BannerContainerOne} className={styles.container__one__banner} ></img>
          <div className={styles.container__one__content__inner}>
            <h1 className={styles.container__one__content__inner__title}>OS 5<br />CARROS<br />MAIS CAROS<br />DO <span>MUNDO</span></h1>
            <div className={styles.container__one__down__arrow} >
              <DownOutlined className={styles.container__one__arrow} />
            </div>
          </div>
        </div>

        <div className={styles.container__two}>
          <div className={styles.contaner__two__content}>
            <div className={styles.contaner__two__content__image}>
              <img src={Car3} className={styles.contaner__two__content__image__inner} />
            </div>
          </div>
          <div>
            <h2>Rolls-Royce Boat Tail</h2>
            <p>Feito sob encomenda, Rolls-Royce Boat Tail é o carro mais caro do mundo. 
            Não é a primeira vez que a Rolls-Royce ocupa o topo do ranking de modelos mais caros.
            Em 2017, o Sweptail foi feito a pedido de um europeu endinheirado.
            Na época, o modelo se tornou o carro mais caro do mundo, chegando a custar o equivalente a R$ 43 milhões,
            mas seu posto foi perdido para o Bugatti La Voiture Noir, de R$ 70,7 milhões. Agora, o Boat Tail desbancou
             o hiperesportivo francês e retomou a majestade. 
            </p>
            <DropdownCar src={'https://www.youtube.com/embed/-hVow2R4tBQ'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerCar