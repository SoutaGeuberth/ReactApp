import { Box, Button, Card, IconButton, Image } from "@chakra-ui/react";

import {
  DrawerActionTrigger,
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
import { LuShoppingCart, LuTrash2 } from "react-icons/lu";
import { useEffect, useState } from "react";

export const ShoppingCart = () => {
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/reserve")
      .then((response) => {
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json(); // Convertir la respuesta en JSON
      })
      .then((data) => {
        setShoppingList(data);
        console.log(data);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <DrawerRoot size={"lg"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant={"ghost"} display={{ base: "flex", md: "flex" }}>
          <LuShoppingCart />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent offset="4" rounded="md">
        <DrawerHeader>
          <DrawerTitle>Carrito Compra</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {shoppingList.map((item, index) => (
            <Card.Root
              flexDirection="row"
              overflow="hidden"
              maxW="xl"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW="150px"
                src={item.srcImg}
                alt={item.name}
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">{item.name}</Card.Title>
                  <Card.Description>
                    {item.totalAmount}
                    {item.size}
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent={"flex-end"}>
                  <IconButton variant={"ghost"} display={"flex"}>
                    <LuTrash2 />
                  </IconButton>
                </Card.Footer>
              </Box>
            </Card.Root>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
