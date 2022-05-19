import React, { useEffect, useContext, useState } from "react"
import { Flex, VStack, HStack } from "@chakra-ui/react"

import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao"
import Header from "../../Components/Headers/Header"
import GlobalContext from "../../Global/GlobalContext"
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante"
import FiltroCategoria from "./FiltroCategoria"

const Home = () => {
  const { requests } = useContext(GlobalContext)

  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    requests.pegarRestaurantes()
  }, [])

  return (
    <>
      <Header titulo="FutureEats" />
      <VStack w="full" h="100vh" spacing={10} p={5}>
        <input placeholder="Restaurante" alt="Restarante-foto" />

        <HStack w="full">
          <FiltroCategoria setCategoria={setCategoria} />
        </HStack>

        <Flex
          direction='column'
          align='center'
          width='100%'
          maxW='328px'
          gap='8px'
        >
          <CardRestaurante
          categoria={categoria}
          />
        </Flex>

        <BarraNavegacao />
      </VStack>
    </>
  )
}

export default Home