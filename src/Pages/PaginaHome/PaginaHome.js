import React, { useEffect, useContext } from 'react'

import GlobalContext from '../../Global/GlobalContext'
import CardRestaurante from '../../Components/CardRestaurante/CardRestaurante'

const Home = () => {

  const { states, setters, requests } = useContext(GlobalContext)

  console.log(states)

  useEffect(() => { requests.pegarRestaurantes() }, [])


  return (
    <div>
      <input placeholder="Restaurante" alt="Restarante-foto" />
      <div></div>
      <div>
        {/* <CardRestaurante onCLick={() => irParaDetalhesRestaurante(navigate, pathParams.id)} /> */}
        <CardRestaurante />
      </div>
    </div>
  )
}

export default Home;