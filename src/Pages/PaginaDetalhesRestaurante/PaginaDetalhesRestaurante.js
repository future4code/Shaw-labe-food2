import React, { useEffect, useContext } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import { useParams } from 'react-router-dom'
import CardProduto from '../../Components/CardProduto/CardProduto'

const PaginaDetalhesRestaurante = () => {

  const pathParams = useParams()

  const { states, setters, requests } = useContext(GlobalContext)

  console.log(states.detalhes)

  useEffect(() => { requests.pegarDetalhes(pathParams.id) }, [])

  return (
    <div>
      {/* <img src={states.detalhes.logoUrl} /> */}
      <h3>{states.detalhes.name}</h3>
      <p>{states.detalhes.category}</p>
      <p>{states.detalhes.deliveryTime} min</p>
      <p>R$ {states.detalhes.shipping},00</p>
      <p>{states.detalhes.address}</p>

      <CardProduto />

    </div>
  )
}

export default PaginaDetalhesRestaurante