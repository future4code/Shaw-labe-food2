import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Image } from "@chakra-ui/react"

import GlobalContext from "../../Global/GlobalContext"
import { irParaDetalhesRestaurante } from "../../Router/Coordinator"
import { CardRestauranteContainer } from "./styled"

const CardRestaurante = () => {

  const navigate = useNavigate()
  const { states } = useContext(GlobalContext)

  return(
    <>
    {states.restaurantes.map((restaurante) => {
      return (
        <Box 
          display='flex'
          flexDirection='column'
          justifyContent='center'
          maxW='328px'
          border='1px solid #b8b8b8'
          borderRadius='8px'
          key={restaurante.id}
          onClick={() => irParaDetalhesRestaurante(navigate, restaurante.id)}
        >
          <Image src={restaurante.logoUrl} objectFit='contain' maxW='100%' height='120px'/>
          <Box padding='16px'>
            <Box fontWeight='semibold' as='h3' color='#5CB646'>{restaurante.name}</Box>
            <Box display='flex' justifyContent='space-between' color='#b8b8b8'>
              <p>{restaurante.deliveryTime} min</p>
              <p>Frete R$ {restaurante.shipping},00</p>
            </Box>
          </Box>
        </Box>
      )
    })}
    </>
  )
}

export default CardRestaurante