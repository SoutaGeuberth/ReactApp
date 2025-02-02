import { Button, Flex } from "@chakra-ui/react";
import {
  MenuContent,
  MenuRoot,
  MenuTrigger,
  MenuRadioItemGroup,
  MenuRadioItem,
} from "./ui/menu";
import { useState } from "react";
import { HiSortAscending } from "react-icons/hi";

export function BodyLayout() {
  const [value, setValue] = useState("");
  return (
    <Flex w="full" justifyContent="flex-end" p={3}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            fontFamily={"serif"}
            fontWeight={"light"}
            fontStyle={"italic"}
          >
            <HiSortAscending /> Sort
          </Button>
        </MenuTrigger>
        <MenuContent
          fontFamily={"serif"}
          fontWeight={"light"}
          fontStyle={"italic"}
        >
          <MenuRadioItemGroup
            value={value}
            onValueChange={(e) => setValue(e.value === value ? "" : e.value)}
          >
            <MenuRadioItem value="asc">Mayor precio</MenuRadioItem>
            <MenuRadioItem value="desc">Menor Precio</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
}
