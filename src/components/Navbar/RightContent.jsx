import { Flex, IconButton, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuBell, LuSearch } from "react-icons/lu";
import { Avatar, AvatarGroup } from "../ui/avatar";
import { ShoppingCart } from "./ShoppingCart";

export function RightContent(props) {
  return (
    <Flex align={"center"} gap={2}>
      <IconButton
        aria-label="Search database"
        variant={"ghost"}
        display={{ base: "flex", md: "none" }}
      >
        <LuSearch />
      </IconButton>
      <InputGroup
        flex="1"
        endElement={<LuSearch />}
        display={{ base: "none", md: "flex" }}
      >
        <Input variant="flushed" size="md" placeholder="Search..." />
      </InputGroup>
      <IconButton variant={"ghost"} display={{ base: "flex", md: "flex" }}>
        <LuBell />
      </IconButton>
      <ShoppingCart toggle={props.toggle} setToggle={props.setToggle} />
      <AvatarGroup>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          variant="outline"
          display={{ base: "flex", md: "flex" }}
        ></Avatar>
      </AvatarGroup>
    </Flex>
  );
}
