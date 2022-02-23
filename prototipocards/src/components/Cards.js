const Cards = (props) => {
  return (
    <div className="cardContainer">
      <button className="menuBtn"></button>
      <div className="container">
        <img src={props.img} alt="Foto de perfil" className="imagemPerfil" />
        <h1 className="nome">{props.nome}</h1>
        <h3 className="cargo">{props.cargo}</h3>
        <p className="telLabel">Tel:</p>
        <p className="tel">{props.tel}</p>
        <p className="emailLabel">Email:</p>
        <p className="email">{props.email}</p>
      </div>
    </div>
  );
};

export default Cards;
