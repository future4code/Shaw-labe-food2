import axios from "axios";
import React, { useEffect, useContext } from "react";
import { BASE_URL } from "../../Contants/Contants";
import {
  irParaEditarPerfil,
  irParaEditarEndereco,
  irParaLogin,
} from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../Global/GlobalContext";
import Header from "../../Components/Headers/Header";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
// import editar from "../../imagens/edit.png";
import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";

const PaginaPerfil = () => {
  const { states, setters } = useContext(GlobalContext);
  const { perfil, pedidos } = states;
  const { setPerfil, setPedidos } = setters;

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    irParaLogin(navigate);
  };
  useEffect(() => {
    buscarInformacoes();
    buscarHistoricoDePedidos();
  }, []);
  const buscarInformacoes = () => {
    const url = `${BASE_URL}/profile`;
    const { token } = localStorage;
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setPerfil(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const buscarHistoricoDePedidos = () => {
    const url = `${BASE_URL}/orders/history`;
    const { token } = localStorage;
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setPedidos(response.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickIrParaEditarPerfil = () => {
    irParaEditarPerfil(navigate);
  };
  const onClickIrParaEditarEndereco = () => {
    irParaEditarEndereco(navigate);
  };
  const listaDePedido = pedidos.map((pedido) => {
    return (
      <Flex>
        <Box
          border="1px solid #B8B8B8"
          borderRadius="8px"
          key={pedido.totalPrice}
        >
          <Text>Nome do Restaurante: {pedido.restaurantName}</Text>
          <Text>SubTotal: {pedido.totalPrice}</Text>
          <Text>Data: {new Date(pedido.createdAt).toLocaleDateString()}</Text>
        </Box>
      </Flex>
    );
  });
  return (
    <>
      <Header titulo="Meu Perfil" />
      <Flex fontSize="16px" direction={"column"}>
        <Button bg="#EEEEEE" onClick={logout}>
          Sair
        </Button>
        <Flex justify={"space-between"}>
          <Box m={"10px"} display={"flex"} flexDirection={"column"}>
            <Text>{perfil.name}</Text>
            <Text>{perfil.email}</Text>
            <Text>{perfil.cpf}</Text>
          </Box>
          <Box>
            {/* <Image src={editar} onClick={onClickIrParaEditarPerfil} /> */}
          </Box>
        </Flex>
        <Flex
          fontSize="16px"
          fontFamily={"Roboto-Regular"}
          direction="column"
          bg="#EEEEEE"
        >
          <Flex justify={"space-between"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box m={"5px"} color="gray" as="p">
                Endereço cadastrado
              </Box>
              <Text m="5px"> {perfil.address}</Text>
            </Box>
            <Box>
              {/* <Image src={editar} onClick={onClickIrParaEditarEndereco} /> */}
            </Box>
          </Flex>
        </Flex>
        <div>
          <Box fontSize={"16px"} m="10px" as="p">
            Historico de compras:
          </Box>
          <Divider borderBottomColor={"gray"} orientation="horizontal" />
          {listaDePedido}
        </div>
      </Flex>
      <BarraNavegacao />
    </>
  );
};
export default PaginaPerfil;
