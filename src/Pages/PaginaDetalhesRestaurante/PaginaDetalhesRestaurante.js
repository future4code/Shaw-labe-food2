import React, { useEffect, useContext } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import { useParams } from 'react-router-dom'
import CardProduto from '../../Components/CardProduto/CardProduto'
import { Box, Flex } from '@chakra-ui/react'

const PaginaDetalhesRestaurante = () => {

  const pathParams = useParams()

  const { states, requests } = useContext(GlobalContext)

  const categorias = []

  const pegaCategorias = () => {
    states.detalhes.products && states.detalhes.products
      .map((categoria) => {
        categorias.push(categoria.category)
      })
  }
  pegaCategorias()

  const categoriasSemRepetir = [...new Set(categorias)]

  // console.log(categoriasSemRepetir)

  // console.log(states.detalhes)

  useEffect(() => {
    requests.pegarDetalhes(pathParams.id)
  }, [])

  return (
    <Flex
      direction='column'
      align='center'
      width='100vw'
      padding='16px'
    >
      <Box
        width='100%'
        maxW='328px'
        height='120px'
        borderRadius='8px 8px 0 0'
        marginBottom='12px'
        backgroundSize={'cover'}
        backgroundPosition='center'
        backgroundImage={states.detalhes.logoUrl}
      />
      <Box width='100%' maxW='328px' color='#b8b8b8'>
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
        direction='column'
        align='center'
        width='100%'
        maxW='328px'
        gap='8px'
      >
        {categoriasSemRepetir.map((categoria) => {
          return (
            <Flex
              direction='column'
              align='flex-start'
              width='100%'
              maxW='328px'
              gap='8px'
              key={categoria}
            >
              <span>{categoria}</span>
              <Box height='1px' width='100%' bg='black' />
              <CardProduto categoria={categoria} />
            </Flex>
          )
        })}
      </Flex>

    </Flex>
  )
}

export default PaginaDetalhesRestaurante