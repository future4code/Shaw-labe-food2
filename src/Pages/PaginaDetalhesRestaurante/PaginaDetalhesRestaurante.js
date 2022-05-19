import React, { useEffect, useContext } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import { useParams } from 'react-router-dom'
import CardProduto from '../../Components/CardProduto/CardProduto'
import { Box, Flex } from '@chakra-ui/react'

const PaginaDetalhesRestaurante = () => {

  const pathParams = useParams()

  const { states, requests } = useContext(GlobalContext)

  console.log(states.detalhes)

  useEffect(() => { requests.pegarDetalhes(pathParams.id) }, [])

  return (
    <Flex
      flexDirection='column'
      alignItens='center'
      width='100vw'
      padding='16px'
    >
      <Box
        width='100%'
        height='120px'
        borderRadius='8px 8px 0 0'
        marginBottom='12px'
        backgroundSize={'cover'}
        backgroundPosition='center'
        backgroundImage={states.detalhes.logoUrl}
      />
      <Box color='#b8b8b8'>
        <Box fontWeight='semibold' as='h3' color='#5CB646'>{states.detalhes.name}</Box>
        <Box marginBottom='16px'>
          <p>{states.detalhes.category}</p>
          <Box display='flex' gap='16px'>
            <p>{states.detalhes.deliveryTime} min</p>
            <p>Frete: R$ {states.detalhes.shipping},00</p>
          </Box>
          <p>{states.detalhes.address}</p>
        </Box>
      </Box>
      
      <Flex
        flexDirection='column'
        alignItens='center'
        gap='8px'
      >
        <CardProduto />
      </Flex>

    </Flex>
  )
}

export default PaginaDetalhesRestaurante