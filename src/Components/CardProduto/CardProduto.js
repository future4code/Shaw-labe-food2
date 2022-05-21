import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, Heading } from "@chakra-ui/react"
import React, { useContext, useState } from "react"

import GlobalContext from "../../Global/GlobalContext"

const CardProduto = (props) => {

  const { states, setters } = useContext(GlobalContext)
  const { carrinho } = states
  const { setCarrinho } = setters
  const [selectedProduct, setSelectedProduct] = useState({});
  const [valor, setValor] = useState("1")

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickAdicionarParaCarrinho = (produto) => {
    const novoCarrinho = [...carrinho]
    let temNoCarrinho = false
    for (let item of novoCarrinho) {
      if (item.id === produto.id) {
        item.quantity += valor
        temNoCarrinho = true
      }
    }
    if (temNoCarrinho === false) {
      novoCarrinho.push({ ...produto, quantity: valor })
    }
    setCarrinho(novoCarrinho)
    onClose()
  }

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

  const idProdutos = []
  const pegaId = () => {
    states.carrinho && states.carrinho
      .map((item) => { idProdutos.push(item.id) })
  }
  pegaId()
  // console.log(idProdutos)

  const onChangeValor = (event) => {
    setValor(parseInt(event.target.value))
  }

  const onAddProduct = (produto) => {
    setSelectedProduct(produto)
    onOpen()
  }

  return (
    <>
      {states.detalhes.products && states.detalhes.products
        .filter((produto) => {
          return produto.category === props.categoria
        })
        .map((produto) => {
          return (
            <Flex
              width='100%'
              border='1px solid #B8B8B8'
              borderRadius='8px'
              key={produto.id}
            >
              <Box
                minW='96px'
                borderRadius='8px 0 0 8px'
                backgroundSize={'cover'}
                backgroundPosition='center'
                backgroundImage={produto.photoUrl}
              />
              <Flex direction='column' maxWidth='232px' grow='1'>
                <Flex justify='flex-end' width='100%'>
                  <Flex
                    justify='center'
                    align='center'
                    width='30px'
                    height='30px'
                    border='1px solid #5CB646'
                    borderRadius='0 8px 0 8px'
                    fontSize='12px'
                    color='#5CB646'
                    position='relative'
                    left='1px'
                    bottom='1px'
                  >
                    <span></span>
                  </Flex>
                </Flex>
                <Flex direction='column' padding='0 16px' width='100%'>
                  <Box fontWeight='semibold' as='h3' color='#5CB646' marginBottom='8px'>
                    {produto.name}
                  </Box>
                  <Box fontSize='12px' color='#B8B8B8' height='30px' marginBottom='4px' as='span'>
                    {produto.description}
                  </Box>
                  <Box fontWeight='semibold' as='h3'>
                    {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </Box>
                </Flex>
                {
                  idProdutos.includes(produto.id) ?
                  (<Box display='flex' justifyContent='flex-end' width='100%'>
                    <Box
                      as='button'
                      width='90px'
                      height='30px'
                      border='1px solid #e02020'
                      borderRadius='8px 0 8px 0'
                      fontSize='12px'
                      color='#e02020'
                      position='relative'
                      left='1px'
                      bottom='-1px'
                      onClick={() => onClickRemoverProduto(produto)}
                    >
                      remover
                    </Box>
                  </Box>) : 
                  (<Box display='flex' justifyContent='flex-end' width='100%'>
                    <Box
                      as='button'
                      width='90px'
                      height='30px'
                      border='1px solid #5CB646'
                      borderRadius='8px 0 8px 0'
                      fontSize='12px'
                      color='#5CB646'
                      position='relative'
                      left='1px'
                      bottom='-1px'
                      onClick={() => onAddProduct(produto)}
                    >
                      adicionar
                    </Box>
                  </Box>)
                }
                {/* <Box display='flex' justifyContent='flex-end' width='100%'>
                  <Box
                    as='button'
                    width='90px'
                    height='30px'
                    border='1px solid #5CB646'
                    borderRadius='8px 0 8px 0'
                    fontSize='12px'
                    color='#5CB646'
                    position='relative'
                    left='1px'
                    bottom='-1px'
                    onClick={() => onAddProduct(produto)}
                  >
                    adicionar
                  </Box>
                </Box> */}
              </Flex>
            </Flex>
          )
        })
      }
      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione a quantidade desejada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select value={valor} onChange={onChangeValor}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color='#5CB646' variant='ghost' mr={3} onClick={() => onClickAdicionarParaCarrinho(selectedProduct)}>
              ADICIONAR AO CARRINHO
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default CardProduto