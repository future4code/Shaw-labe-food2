import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";

import GlobalContext from "../../Global/GlobalContext";
import { irParaDetalhesRestaurante } from "../../Router/Coordinator";

const CardRestaurante = (props) => {
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);

  return (
    <>
      <VStack spacing={3}>
        {states.restaurantes
          .filter((restaurante) => {
            return (
              props.categoria === "" || restaurante.category === props.categoria
            );
          })
          .map((restaurante) => {
            return (
              <Box
                className="restaurant-card"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                border="1px solid #b8b8b8"
                borderRadius="8px"
                key={restaurante.id}
                onClick={() =>
                  irParaDetalhesRestaurante(navigate, restaurante.id)
                }
              >
                <Image
                  src={restaurante.logoUrl}
                  objectFit="contain"
                  maxW="100%"
                  height="120px"
                />
                <Box padding="16px">
                  <Box fontWeight="semibold" as="h3" color="#5CB646">
                    {restaurante.name}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    color="#b8b8b8"
                  >
                    <p>{restaurante.deliveryTime} min</p>
                    <p>Frete: R$ {restaurante.shipping},00</p>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </VStack>
    </>
  );
};

export default CardRestaurante;
