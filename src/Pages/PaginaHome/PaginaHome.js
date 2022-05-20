import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";
import Header from "../../Components/Headers/Header";
import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import FiltroCategoria from "./FiltroCategoria";
import { Flex, VStack, HStack, SimpleGrid, Button, Input } from "@chakra-ui/react";
import { irParaBusca, irParaCadastro } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  
  const { states, setters, requests } = useContext(GlobalContext);

  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    requests.pegarRestaurantes()
  }, [])

  return (
    <>
      <VStack w="full" spacing={3} p={5} h="80vh">
        <Header titulo="FutureEats" />
        {/* <CardRestaurante onCLick={() => irParaDetalhesRestaurante(navigate, pathParams.id)} /> */}

        
        <Input 
         backgroundColor={"white"}
         size='md'
          mb={"5px"} 
          w="full"
          placeholder="Buscar por Restaurante" 
          alt="Restarante-foto" 
          onClick={() => irParaBusca(navigate)} />          

        <HStack w="full">
          <FiltroCategoria setCategoria={setCategoria} />
        </HStack>

        <StyledBox>
          <CardRestaurante categoria={categoria} />
        </StyledBox>

        <Flex
          direction='column'
          align='center'
          width='100%'
          maxW='328px'
          gap='8px'
        >
        </Flex>

      
      </VStack>
      <BarraNavegacao />
    </>
  )
}

export default Home