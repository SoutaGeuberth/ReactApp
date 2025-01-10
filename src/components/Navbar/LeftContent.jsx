import { Button, Flex, Heading } from "@chakra-ui/react";
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
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

{
  /*Left content include the heading brand name and the drawer menu*/
}
export function LeftContent() {
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
            <DrawerTitle />
          </DrawerHeader>
          <DrawerBody>
            {/* For better customizations of order at future */}
            <Flex justify={"space-between"} gap={1} marginEnd={"auto"}>
              <Flex wrap={"wrap"}>
                <Button variant={"ghost"}>Home</Button>
                <Button variant={"ghost"}>About</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>taino</Button>
                <Button variant={"ghost"}>lasllas</Button>
                <Button variant={"ghost"}>Services</Button>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Blog</Button>
              </Flex>
              <Flex wrap={"wrap"}>
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
              <Flex wrap={"wrap"}>
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
