import React, { useEffect, useContext } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import { useParams } from 'react-router-dom'
import CardProduto from '../../Components/CardProduto/CardProduto'
import { Box, Image } from '@chakra-ui/react'

const PaginaDetalhesRestaurante = () => {

  const pathParams = useParams()

  const { states, setters, requests } = useContext(GlobalContext)

  console.log(states.detalhes)

  useEffect(() => { requests.pegarDetalhes(pathParams.id) }, [])

  return (
    <Box
      width='328px'
    >
      <Image width='100%' height='120px' borderRadius='8px 8px 0 0' src={states.detalhes.logoUrl} />
      <Box color='#b8b8b8'>
        <Box fontWeight='semibold' as='h3' color='#5CB646'>{states.detalhes.name}</Box>
        <Box>
          <p>{states.detalhes.category}</p>
          <Box display='flex' gap='16px'>
            <p>{states.detalhes.deliveryTime} min</p>
            <p>Frete: R$ {states.detalhes.shipping},00</p>
          </Box>
          <p>{states.detalhes.address}</p>
        </Box>
      </Box>

      <CardProduto />

    </Box>
  )
}

export default PaginaDetalhesRestaurante