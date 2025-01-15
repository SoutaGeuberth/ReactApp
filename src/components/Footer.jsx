import {
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import FooterLogo from "../assets/images/logo2.png";

export function Footer() {
  return (
    <Flex h={"12rem"}>
      <Container bgColor={"blackAlpha.600"} fluid>
        <SimpleGrid
          column={"3"}
          mt={"10px"}
          minChildWidth="sm"
          py={"10px"}
          columnGap={"2"}
        >
          <Container
            maxW={"md"}
            p={"3"}
            borderLeftWidth={"1px"}
            borderColor={"white"}
          >
            <Heading
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              About as
            </Heading>
            <Text
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
              mt={"10px"}
            >
              Vuelve a ser parte de la mejor epoca en la moda del hombre, si
              quieres algo clasico, este es tu lugar.
              <br />
              Direccion: Tranversal a tu corazón bb
            </Text>
          </Container>
          <Container
            maxW={"md"}
            p={"3"}
            borderLeftWidth={"1px"}
            borderColor={"white"}
          >
            <Heading
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              Contacto
            </Heading>
            <Link mt={"10px"}>Instagram</Link>
            <br />
            <Link mt={"10px"}>Twitter</Link>
            <br />
            <Link mt={"10px"}>GangOrcaClothing@gmail.com</Link>
          </Container>
          <Container
            maxW={"md"}
            p={"3"}
            bgColor={"green"}
            bgImg={`url(${FooterLogo})`}
            bgSize={"cover"}
          ></Container>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
