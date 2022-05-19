import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import react from "react";
import home from "../../imagens/homepage@2x.png";
import shoppingCart from "../../imagens/shopping-cart@2x.png";
import avatar from "../../imagens/avatar@2x.png";
import { useNavigate } from "react-router-dom";
import {
  irParaEditarPerfil,
  irParaHome,
  irPedido,
} from "../../Router/Coordinator";

const BarraNavegacao = () => {
  const navigate = useNavigate();

  return (
    <HStack bg="white" py="1em" borderTop={"1px"} spacing={6} justify="space-evenly" w="full" pos={'fixed'} bottom={0}>
      <Image boxSize={"10%"} src={home} onClick={() => irParaHome(navigate)} />
      <Image
        boxSize={"10%"}
        src={shoppingCart}
        onClick={() => irPedido(navigate)}
      />
      <Image
        boxSize={"10%"}
        src={avatar}
        onClick={() => irParaEditarPerfil(navigate)}
      />
    </HStack>
  )
}
export default BarraNavegacao;
