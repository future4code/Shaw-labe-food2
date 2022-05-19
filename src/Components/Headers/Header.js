import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import seta from "../../imagens/back@2x.png";
import { voltar } from "../../Router/Coordinator";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <SimpleGrid  borderBottom={"1px"} columns={3} spacing={2}>
      <Image   
      boxSize={"3em"}     
        src={seta}
        onClick={() => voltar(navigate)}
        padding={"5px"}
       
      />

      <Heading  mt={"7px"} fontSize={"1.3em"}>{props.titulo}</Heading>
    
    </SimpleGrid>
  );
};
export default Header;
