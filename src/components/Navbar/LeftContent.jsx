import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
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
export function LeftContent({ data }) {
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
                      {prop.subItems.map((subItem, index2) => (
                        <Button key={index2} variant={"ghost"}>
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
            <Flex justify={"space-between"} gap={1} marginEnd={"auto"}>
              <Flex wrap={"wrap"} display={{ base: "none", md: "flex" }}>
                <Button variant={"ghost"}>Home</Button>
                <Button variant={"ghost"}>About</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
              </Flex>
              <Flex wrap={"wrap"} display={{ base: "none", md: "flex" }}>
                <Button variant={"ghost"}>Home</Button>
                <Button variant={"ghost"}>About</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
                <Button variant={"ghost"}>saowqop</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
              </Flex>
              <Flex wrap={"wrap"} display={{ base: "none", md: "flex" }}>
                <Button variant={"ghost"}>Home</Button>
                <Button variant={"ghost"}>About</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
              </Flex>
            </Flex>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </DrawerRoot>
      <Heading color="white" fontWeight="bold" fontStyle="italic">
        {" "}
        {/* Added some styles */}
        Hola
      </Heading>
    </Flex>
  );
}
