import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";
import Header from "../../Components/Headers/Header";
import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import FiltroCategoria from "./FiltroCategoria";
import { Flex, VStack, HStack, SimpleGrid } from "@chakra-ui/react";

const Home = () => {
  const { states, setters, requests } = useContext(GlobalContext);

  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    requests.pegarRestaurantes();
  }, []);

  return (
    <>
      <Header titulo="FutureEats" />
      <VStack w="full" h="100vh" spacing={10} p={5}>
        {/* <CardRestaurante onCLick={() => irParaDetalhesRestaurante(navigate, pathParams.id)} /> */}

        <input placeholder="Restaurante" alt="Restarante-foto" />

        <HStack w="full">
          <FiltroCategoria setCategoria={setCategoria} />
        </HStack>

        <CardRestaurante categoria={categoria} />
        <BarraNavegacao />
      </VStack>
    </>
  );
};

export default Home;
