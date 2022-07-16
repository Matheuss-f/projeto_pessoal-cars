import React from "react";
import DropdownCar from "../Dropdowncar/DropdownCar";
import BannerContainerOne from '../../assets/images/banner_container_one.jpg'
import Car1 from '../../assets/images/car1.jpg'
import Car2 from '../../assets/images/car2.jpg'
import Car3 from '../../assets/images/car3.jpg'
import Car4 from '../../assets/images/car4.jpg'
import Car5 from '../../assets/images/car5.jpg'
import styles from "./ContainerCar.module.css"
import { DownOutlined } from "@ant-design/icons";
import ContentCar from "../ContentCar/ContentCar";

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

        <ContentCar
        src={Car1}
        title={'Rolls-Royce Boat Tail'}
        text={'Feito sob encomenda, Rolls-Royce Boat Tail é o carro mais caro do mundo. Não é a primeira vez que a Rolls-Royce ocupa o topo do ranking de modelos mais caros. Em 2017, o Sweptail foi feito a pedido de um europeu endinheirado.Na época, o modelo se tornou o carro mais caro do mundo, chegando a custar o equivalente a R$ 43 milhões,mas seu posto foi perdido para o Bugatti La Voiture Noir, de R$ 70,7 milhões.'}
        />

        <ContentCar
        src={Car2}
        title={'Bugatti Centodieci'}
        text={'O Bugatti Centodieci é um carro ultra-exclusivo, do qual serão produzidas apenas 10 unidades no mundo. Um de seus afortunados clientes é Cristiano Ronaldo, que em breve poderá adicioná-lo à sua coleção. Como lembrete, o Centodieci é um dos carros mais caros do mercado. Seu preço começa em 8 milhões de euros (R$ 42,2 milhões em conversão direta), o que é bem mais em relação ao Bugatti Chiron em que é baseado.'}
        />

        <ContentCar
        src={Car3}
        title={'Bugatti La Voiture Noire'}
        text={'Por culpa do Rolls-Royce Boat Tail de R$ 140 milhões, o Bugatti La Voiture Noire não é mais o carro mais caro do mundo. Isso não significa que seja menos impressionante, já que a edição única do hipercarro com motor W16 finalmente foi revelado pronto para ser entregue ao cliente que pagou 11 milhões de euros (R$ 67.496.000 na cotação atual).'}
        />

        <ContentCar
        src={Car4}
        title={'Pagani Huayra'}
        text={'O modelo foi apresentado na versão BC com um motor que agora gera 800 cv e 112,1 mkgf e uma nova transmissão de dupla embreagem de sete marchas. O huayra BC pesa 1.218 kg, 132 kg a menos que a versão standard, serão produzidas apenas 20 unidades com preço de 2.3 milhões de euros.'}
        />

        <ContentCar
        src={Car5}
        title={'Aston Martin Victor'}
        text={'Baseado na paltaforma do One-77, o esportivo usa peças de vários outros modelos da Aston Martin, inclusivedo Vulcan (feito apenas para as pistas de corrida) e o futuro hipercarro Valkyrie. Até o motor é especial, com o 7.3 V12 do One-77, porém refeito completamente pela Cosworth para gerar 847 cv e 113,5 kgfm. O mais especial dele é que apenas um foi produzido sob encomenda e o preço, segundo rumores, seria de quase US$ 3,0 milhões (R$ 16.800.900).'}
        />

      </div>
    </>
  )
}

export default ContainerCar