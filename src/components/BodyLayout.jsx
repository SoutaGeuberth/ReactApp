import { Button, Flex, Box } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { LuArrowDown } from "react-icons/lu";

export function BodyLayout() {
  return (
    <Flex justify={{ base: "center", md: "flex-end" }} m={"10px"} h={"20px"}>
      <Box m={"10px"}>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              Filtros
              <LuArrowDown />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem
              asChild
              value="naruto"
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              <a target="_blank" rel="noreferrer">
                Naruto
              </a>
            </MenuItem>
            <MenuItem
              asChild
              value="one-piece"
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              <a target="_blank" rel="noreferrer">
                One Piece
              </a>
            </MenuItem>
            <MenuItem
              asChild
              value="attack-on-titan"
              fontFamily={"serif"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              <a target="_blank" rel="noreferrer">
                Attack on Titan
              </a>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </Flex>
  );
}
