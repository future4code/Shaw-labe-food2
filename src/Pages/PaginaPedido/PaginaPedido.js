import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../Contants/Contants";

const PaginaPedido = () => {
  const { states, setters } = useContext(GlobalContext);
  const { carrinho, perfil, detalhes, pedidoEmAndamento, detalhesPedido } = states;
  const { setCarrinho, setPerfil, setPedidoEmAndamento, setDetalhesPedido } = setters
  const [pagamento, setPagamento] = useState()

  useEffect(()=>{
    buscarInformacoes()
  }, [])

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

  const onClickConfirmarPedido = () => {
    const url = `${BASE_URL}/restaurants/${detalhes.id}/order`
    const { token } = localStorage
    const body = {
      products: carrinho,
      paymentMethod: pagamento
    }

    axios
      .post(url, body, {
        headers :{
          auth: token
      }})
      .then((response) => {
        setDetalhesPedido(response.data.order)
        setPedidoEmAndamento(true)
        setCarrinho([])
      })
      .catch((error) => {
        console.log(error)
      })
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

  const onChangeMetodoDePagamento = (event) => {
    setPagamento(event.target.value)
  }

  let valorSubTotal = 0

  for(let item of carrinho){
    valorSubTotal = item.price * item.quantity + valorSubTotal
  }

  let valorFrete = detalhes.shipping

  let valorTotal = valorFrete + valorSubTotal

  if (itemCarrinho.length === 0) {
    return(
      <div>
        
        <div>
          <p>Endereço de entrega: {perfil.address}</p>
        </div>

        <div>
          <p>Carrinho Vazio</p>
        </div>

        <div>
          <p>Valor Total R$ {valorSubTotal},00</p>
          <p>Valor Frete R$ 0,0</p>
        </div>

        <div>
          <p>Formas de Pagamento</p>
        </div>
        <BarraNavegacao />
      </div>
    );
  }

  return (
    <div>
      <Header titulo="Carrinho" />
      <div>
        <p>Endereço de Entrega: {perfil.address}</p>
      </div>

      <div>
        <h2>{detalhes.name}</h2>
        <h3>{detalhes.address}</h3>
        <h3>{detalhes.deliveryTime}</h3>
      </div>
      
      <div>
        {itemCarrinho}
      </div>

      <div>
        <p>Valor Subtotal = R$ {valorSubTotal}</p>
        <p>Valor do Frete = R$ {valorFrete}</p>
        <p>Valor Total = R$ {valorTotal}</p>
      </div>

      <div>
        <p>Formas de Pagamento</p>
        <form>
          <input onChange={onChangeMetodoDePagamento} type="radio" id="money" value="money" checked={pagamento === "money"}/>
          <label for="money">Dinheiro</label>
          <input onChange={onChangeMetodoDePagamento} type="radio" id="creditcard" value="creditcard" checked={pagamento === "creditcard"}/>
          <label for="creditcard">Cartão de Crédito</label>
        </form>
        <button onClick={onClickConfirmarPedido}>Confirmar</button>
      </div>
      <BarraNavegacao />
    </div>
  );
};

export default PaginaPedido;
