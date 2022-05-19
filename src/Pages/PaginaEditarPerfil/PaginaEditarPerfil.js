import React from 'react'

import { Box, Button, Flex, Image, Input } from '@chakra-ui/react';
import useForm from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../Contants/Contants';
import { voltar } from '../../Router/Coordinator';
import { useNavigate } from 'react-router-dom';
import BarraNavegacao from '../../Components/BarraDeNavegacao/BarraNavegacao'
import Header from '../../Components/Headers/Header'


const PaginaEditarPerfil = () => {

  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({
    name: "",
    email: "", 
    cpf: ""
  })

  const onClickEditarPerfil = (event) => {
    event.preventDefault()
    const url = `${BASE_URL}/profile`
    const { token } = localStorage
    
    axios
      .put(url, form, {
        headers: {
          auth: token
        }
      })
      .then(() => {
        clear()
        alert('Dados alterados com sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onClickVoltar = () => {
    voltar(navigate)
  }


  return (

    <Flex  direction={"column"}
    align={"center"}
    justify={"center"}
    padding={"0 0 36px"}
    h={"100vh"}>
    
      <Box as="h1" fontSize={"20px"} fontWeight={"bold"} alignSelf={'center'} mb={"10px"}>
          Editar Perfil
      </Box>
      
      <form onSubmit={onClickEditarPerfil}>
        <Flex direction={"column"}>
          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            name={"email"}
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            name={"cpf"}
            placeholder="CPF"
            value={form.cpf}
            onChange={onChange}
            required
          />
          
          <Button fontFamily={"Roboto-Regular"}  bg="#5cb646" type="submit">Salvo</Button>
          <Button fontFamily={"Roboto-Regular"} bg="#5cb646" onClick={onClickVoltar}>Voltar</Button>
        </Flex>
      </form>
    </Flex>

  )
}

export default PaginaEditarPerfil;