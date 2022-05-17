import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imagens from "../../imagens/logo-invert.png";

const PaginaDeCadastro = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const onClickCadastrar = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup",
        form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        clear();
        PaginaDeCadastro(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Flex
    direction={"column"}
      align={"center"}
      justify={"center"}
      padding={"1em"}
      h={"100vh"}>
        <Image
        mb={"50px"}
         src ={imagens}
        />
      <h1>Cadastrar</h1>
      <form onSubmit={onClickCadastrar}>
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
            type={"text"}
          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            required
            name={"email"}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
          />
          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            required
            name={"cpf"}
            type="number"
            placeholder="CPF"
            value={form.cpf}
            onChange={onChange}
            title={"Apenas numeros"}
            min={10}
          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            required
            name={"password"}
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            min={8}
            max={10}
            title={"minimo 8 caracteres"}
            w = {"360px"}
            padding= {"0 16px 8px"}

          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            required
            name={"password"}
            placeholder="Confirme a Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            min={8}
            max={10}
            title={"minimo 8 caracteres"}
          />
          <Button fontFamily={"Roboto-Regular"}  bg="#5cb646" type="submit">Criar</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default PaginaDeCadastro;
