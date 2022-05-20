import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";
import Header from "../../Components/Headers/Header";
import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import FiltroCategoria from "./FiltroCategoria";
import { Flex, VStack, HStack, SimpleGrid, Box } from "@chakra-ui/react";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 100%;
  div .restaurant-card:last-child {
    margin-bottom: 5em;
  }
`;

const Home = () => {
  const { states, setters, requests } = useContext(GlobalContext);

  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    requests.pegarRestaurantes();
  }, []);

  return (
    <>
      <VStack w="full" spacing={3} p={5} h="80vh">
        <Header titulo="FutureEats" />
        {/* <CardRestaurante onCLick={() => irParaDetalhesRestaurante(navigate, pathParams.id)} /> */}

        <input placeholder="Restaurante" alt="Restarante-foto" />

        <HStack w="full">
          <FiltroCategoria setCategoria={setCategoria} />
        </HStack>

        <StyledBox>
          <CardRestaurante categoria={categoria} />
        </StyledBox>
      </VStack>
      <BarraNavegacao />
    </>
  );
};

export default Home;
