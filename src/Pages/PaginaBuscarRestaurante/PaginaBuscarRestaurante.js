import React, { useState, useEffect,useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { BASE_URL } from "../../Contants/Contants";
import Header from '../../Components/Headers/Header';

const PaginaBuscarRestaurante = () => {
 

   
  return (
    <div>
      <Header titulo="Busca"/>
      <h1>PaginaBuscarRestaurante</h1>
      <input type={"text"}
              placeholder="Buscar por Restaurante"
               
              />  
    </div>
  )
}

export default PaginaBuscarRestaurante