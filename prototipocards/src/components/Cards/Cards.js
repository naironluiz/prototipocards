import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardContainer}>
        <button className={styles.menuBtn}>...</button>

        <img
          src={props.img}
          alt="Foto de perfil"
          className={styles.imagemPerfil}
        />
        <div className={styles.infoContainer}>
          <h1 className={styles.nome}>{props.nome}</h1>
          <h3 className={styles.cargo}>{props.cargo}</h3>
          <p className={styles.tel}>{props.tel}</p>
          <p className={styles.email}>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
