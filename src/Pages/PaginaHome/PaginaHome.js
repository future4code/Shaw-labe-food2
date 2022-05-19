import React, { useEffect, useContext, useState } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import CardRestaurante from '../../Components/CardRestaurante/CardRestaurante'
import FiltroCategoria from './FiltroCategoria'
import { Flex } from '@chakra-ui/react'

const Home = () => {

  const { requests } = useContext(GlobalContext)

  const [categoria, setCategoria] = useState("")

  useEffect(() => { requests.pegarRestaurantes() }, [])


  return (
    <Flex
      flexDirection='column'
      alignItens='center'
      width='100vw'
      padding='16px'
    >
      <input placeholder="Restaurante" alt="Restarante-foto" />
      <FiltroCategoria
        setCategoria={setCategoria}
      />
      <Flex
        flexDirection='column'
        alignItens='center'
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