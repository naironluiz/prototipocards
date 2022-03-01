import style from "./Cards.module.css";
import Cards from "./Cards";
import Data from "../../data.json";

const dataObj = JSON.parse(Data);
const CardsContainer = () => {
  return (
    <div className={style.megawrapper}>
      <Cards
        img={dataObj.map((img) => {
          return { img };
        })}
        nome="Nairon dasdsaLuiz"
        cargo="Frontend Dedsadsaveloper"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon dsdsaLuiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />

      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Ultimo"
        cargo="Frontend Developer"
        tel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
    </div>
  );
};
export default CardsContainer;
