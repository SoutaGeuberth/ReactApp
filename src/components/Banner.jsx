import { Box, Button, Flex, Group, Heading } from "@chakra-ui/react";
import bannerImage from "../assets/images/banner_image.png";

export function Banner() {
  return (
    <Box bg="gray" h="35vh" bgImg={`url(${bannerImage})`} bgSize={"cover"}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        h={"100%"}
        bg={"rgb(0 0 0 / 10%)"}
      >
        <Heading
          color="white"
          textAlign="center"
          fontFamily={"serif"}
          fontWeight={"light"}
          fontStyle={"italic"}
          textTransform={"uppercase"}
          mt={"230px"} //Space between the heading and the buttons
        >
          Viste como un Hombre
        </Heading>
        <Group
          fontFamily={"serif"}
          fontWeight={"light"}
          fontStyle={"italic"}
          pt={"10px"} //Space between the heading and the buttons
        >
          <Button
            size={"sm"}
            borderRadius={"0"}
            variant="ghost"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            Nueva Colección
          </Button>
          <Button
            size={"sm"}
            borderRadius={"0"}
            variant="ghost"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            Ser miembro
          </Button>
        </Group>
      </Flex>
    </Box>
  );
}
