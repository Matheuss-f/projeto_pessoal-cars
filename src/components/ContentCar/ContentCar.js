import React from "react";
import styles from "./ContentCar.module.css"

function ContentCar({ title, text, src }) {

  return (
    <div className={styles.container__two}>
      <div className={styles.contaner__two__content}>
        <div className={styles.contaner__two__content__image}>
          <img src={src} className={styles.contaner__two__content__image__inner} />
        </div>
      </div>
      <div className={styles.container__two__description}>
        <h2 className={styles.container__two__description__title}>{title}</h2>
        <p className={styles.container__two__description__text}>{text}</p>
      </div>
    </div>
  )
}

export default ContentCar