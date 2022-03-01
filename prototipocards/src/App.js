import Developer from "./components/Developer/Developer";
import CardsContainer from "./components/Cards/CardsContainer";
import Darkmode from "./components/Darkmode/Darkmode";

let App = () => {
  return (
    <div className="wrapper">
      {/* mudar isso depois */}
      <Developer developer="Frondastend" />
      <CardsContainer />
      <Developer developer="Backend" />
      <CardsContainer />
      <Darkmode />
    </div>
  );
};

export default App;
