import React, { useContext } from "react"

import GlobalContext from "../../Global/GlobalContext"
import { CardProdutoContainer } from "./styled"

const CardProduto = () => {

  const { states } = useContext(GlobalContext)

  return(
    <>
    {states.detalhes.products && states.detalhes.products.map((produto) => {
        return(
          <CardProdutoContainer key={produto.id}>
            {/* <img src={produto.photoUrl} /> */}
            <div>
              <h3>{produto.name}</h3>
              <p>{produto.category}</p>
              <p>{produto.description}</p>
              <p>R$ {produto.price},00</p>
              <button>Adicionar</button>
            </div>
          </CardProdutoContainer>
        )
      })
      }
    </>
  )
}

export default CardProduto