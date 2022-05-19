import React, { useEffect, useContext, useState } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import CardRestaurante from '../../Components/CardRestaurante/CardRestaurante'
import FiltroCategoria from './FiltroCategoria'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {

  const { requests } = useContext(GlobalContext)

  const [categoria, setCategoria] = useState("")

  useEffect(() => { requests.pegarRestaurantes() }, [])


  return (
    <Flex
      direction='column'
      align='center'
      width='100vw'
      padding='16px'
    >
      <input placeholder="Restaurante" alt="Restarante-foto" />
      <Box width='100%'>
        <FiltroCategoria
          setCategoria={setCategoria}
        />
      </Box>
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
    </Flex>
  )
}

export default Home