import { Button, Flex, Group, Heading, HStack } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

{
  /*Left content include the heading brand name and the drawer menu*/
}
export function LeftContent({ data, setFiltro }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex alignItems={"center"} gap={2}>
      <DrawerRoot
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
        placement={"bottom"}
        contained={true}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant={"ghost"}>
            <LuMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <HStack
              justifyContent={"space-around"}
              w={"full"}
              display={{ base: "flex", md: "none" }}
            >
              {data?.map((prop, index) => (
                <PopoverRoot
                  key={index}
                  lazyMount
                  unmountOnExit
                  positioning={{ placement: "top-start", sameWidth: true }}
                >
                  <PopoverTrigger asChild>
                    <Button
                      key={index}
                      variant={"ghost"}
                      size={"lg"}
                      minW={"fit-content"}
                    >
                      {prop.name}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent width="auto">
                    <PopoverBody>
                      {prop.subItems.map((subItem, index) => (
                        <Button key={index} variant={"ghost"} size={"lg"}>
                          {subItem.label}
                        </Button>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </PopoverRoot>
              ))}
            </HStack>
            <DrawerTitle />
          </DrawerHeader>

          <DrawerBody>
            {/* For better customizations of order at future */}
            <Flex
              justify={"space-between"}
              gap={1}
              marginEnd={"auto"}
              mx={"20px"}
            >
              <Group
                wrap={"wrap"}
                display={{ base: "none", md: "flex" }}
                fontFamily={"serif"}
                fontWeight={"light"}
                fontStyle={"italic"}
              >
                <Button variant={"ghost"} onClick={() => setFiltro("Camiseta")}>
                  Camisetas
                </Button>
                <Button variant={"ghost"}>Camisas</Button>
                <Button variant={"ghost"}>Busos</Button>
                <Button variant={"ghost"}>Gabardina</Button>
                <Button variant={"ghost"}>Sueter</Button>
                <Button variant={"ghost"}>Abrigo</Button>
                <Button variant={"ghost"}>Kimono</Button>
              </Group>

              <Group
                wrap={"wrap"}
                display={{ base: "none", md: "flex" }}
                fontFamily={"serif"}
                fontWeight={"light"}
                fontStyle={"italic"}
              >
                <Button variant={"ghost"}>Pantalones</Button>
                <Button variant={"ghost"}>Jeans</Button>
              </Group>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
      <Heading
        color="white"
        fontFamily={"serif"}
        fontWeight={"light"}
        fontStyle={"italic"}
      >
        {/* Added some styles */}
        Gang Orca Clothing
      </Heading>
    </Flex>
  );
}
