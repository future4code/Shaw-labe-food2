import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React, { useContext } from "react"

import GlobalContext from "../../Global/GlobalContext"

const CardProduto = () => {

  const { states } = useContext(GlobalContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {states.detalhes.products && states.detalhes.products.map((produto) => {
        return (
          <Box
            display='flex'
            border='1px solid #b8b8b8'
            borderRadius='8px'
            key={produto.id}
          >
            <Image width='96px' src={produto.photoUrl} />

            <Box display='flex' flexDirection='column' width='100%'>
              <Box display='flex' justifyContent='flex-end' width='100%'>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  width='30px'
                  height='30px'
                  border='1px solid #5cb646'
                  borderRadius='0 8px 0 8px'
                  fontSize='12px'
                  color='#5cb646'
                >
                  <span>2</span>
                </Box>
              </Box>

              <Box display='flex' flexDirection='column' padding='0 16px' width='100%'>
                <Box fontWeight='semibold' as='h3' color='#5CB646'>{produto.name}</Box>
                <span>{produto.category}</span>
                <Box fontSize='12px' color='#b8b8b8' as='span'>{produto.description}</Box>
                <Box fontWeight='semibold' as='h3'>R$ {produto.price}</Box>
              </Box>

              <Box display='flex' justifyContent='flex-end' width='100%'>
                <Box
                  as='button'
                  width='90px'
                  height='30px'
                  border='1px solid #5cb646'
                  borderRadius='8px 0 8px 0'
                  fontSize='12px'
                  color='#5cb646'
                  onClick={onOpen}
                >
                  adicionar
                </Box>

                <Modal isOpen={isOpen} onClose={onClose} isCentered >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Selecione a quantidade desejada</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Select>
                        <option value='0'>0</option>
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
                      <Button color='#5cb646' variant='ghost' mr={3} onClick={onClose}>
                        ADICIONAR AO CARRINHO
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>

            </Box>
          </Box>
        )
      })
      }
    </>
  )
}

export default CardProduto