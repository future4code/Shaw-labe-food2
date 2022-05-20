import React, { useContext } from "react";
import BarraNavegacao from "../../Components/BarraDeNavegacao/BarraNavegacao";
import CardProduto from "../../Components/CardProduto/CardProduto";
import Header from "../../Components/Headers/Header";
import GlobalContext from "../../Global/GlobalContext";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

const PaginaPedido = () => {
  const { states, setters } = useContext(GlobalContext);
  const { carrinho } = states;
  const { setCarrinho } = setters

  const onClickRemoverProduto = (item) => {
    if(item.quantity > 1){
      const novoCarrinho = [...carrinho]
      for(let produto of novoCarrinho){
        if(produto.id === item.id){
          produto.quantity -= 1
        }
      }
      setCarrinho(novoCarrinho)
    }else {
      const novoCarrinho = carrinho.filter((produto) => {
        return produto.id !== item.id
      })
      setCarrinho(novoCarrinho)
    }
  }

  const itemCarrinho = carrinho.map((item) => {
    return (
      <Flex
        width="100%"
        border="1px solid #b8b8b8"
        borderRadius="8px"
        key={item.id}
      >
        <Box
          minW="96px"
          borderRadius="8px 0 0 8px"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundImage={item.photoUrl}
        />

        <Flex direction="column" maxWidth="232px" grow="1">
          <Flex justify="flex-end" width="100%">
            <Flex
              justify="center"
              align="center"
              width="30px"
              height="30px"
              border="1px solid #5cb646"
              borderRadius="0 8px 0 8px"
              fontSize="12px"
              color="#5cb646"
              position="relative"
              left="1px"
              bottom="1px"
            >
              <span>{item.quantity}</span>
            </Flex>
          </Flex>

          <Flex direction="column" padding="0 16px" width="100%">
            <Box
              fontWeight="semibold"
              as="h3"
              color="#5CB646"
              marginBottom="8px"
            >
              {item.name}
            </Box>
            <Box
              fontSize="12px"
              color="#b8b8b8"
              height="30px"
              marginBottom="4px"
              as="span"
            >
              {item.description}
            </Box>
            <Box fontWeight="semibold" as="h3">
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Box>
          </Flex>

          <Box display="flex" justifyContent="flex-end" width="100%">
            <Box
              as="button"
              width="90px"
              height="30px"
              border="1px solid #5cb646"
              borderRadius="8px 0 8px 0"
              fontSize="12px"
              color="#5cb646"
              position="relative"
              left="1px"
              bottom="-1px"
              onClick={() => onClickRemoverProduto(item)}
            >
              remover
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  });

  if (itemCarrinho.length === 0) {
    return <p>Carrinho Vazio</p>;
  }
  return (
    <div>
      <Header titulo="Carrinho" />
      {itemCarrinho}
      <BarraNavegacao />
    </div>
  );
};

export default PaginaPedido;
