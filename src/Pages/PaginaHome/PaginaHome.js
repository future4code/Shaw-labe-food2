import React, { useEffect, useContext } from "react";

import GlobalContext from "../../Global/GlobalContext";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";
import Header from "../../Components/Headers/Header";

const Home = () => {
  const { states, setters, requests } = useContext(GlobalContext);

  console.log(states);

  useEffect(() => {
    requests.pegarRestaurantes();
  }, []);

  return (
    <>
      <Header titulo="FutureEats"/>
      <div>
        <input placeholder="Restaurante" alt="Restarante-foto" />
        <div></div>
        <div>
          {/* <CardRestaurante onCLick={() => irParaDetalhesRestaurante(navigate, pathParams.id)} /> */}
          <CardRestaurante />
          <BarraNavegacao />
        </div>
      </div>
    </>
  );
};

export default Home;
