import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

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
        <CardRestauranteContainer key={restaurante.id}
          onClick={() => irParaDetalhesRestaurante(navigate, restaurante.id)}>
          {/* <img src={restaurante.logoUrl} /> */}
          <h3>{restaurante.name}</h3>
          <div>
            <p>{restaurante.deliveryTime} min</p>
            <p>Frete R$ {restaurante.shipping},00</p>
          </div>
        </CardRestauranteContainer>
      )
    })}
    </>
  )
}

export default CardRestaurante