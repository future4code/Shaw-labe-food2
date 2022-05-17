import React, { useState } from 'react'
import axios from 'axios'
import {GlobalContext} from '../Global/GlobalContext';

const GlobalState = (props) => {
  const [restaurantes, setRestaurantes] = useState([])
  const [detalhes, setDetalhes] = useState({})
 
 
  const pegarRestaurantes = () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }
    axios
     .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", headers)
     .then((res) => {
      setRestaurantes(res.data.restaurants)
     })
     .catch((err) => {console.log(err.response)})
  }
  const pegarDetalhes = (id) => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${id}`, headers)
      .then((res) => {
        setDetalhes(res.data.restaurant)
      })
      .catch((err) => { console.log(err.response) } )
  }
  
  const states = {restaurantes, detalhes}
  const setters = {setRestaurantes, setDetalhes}
  const requests = {pegarRestaurantes, pegarDetalhes}
  return (
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default GlobalState