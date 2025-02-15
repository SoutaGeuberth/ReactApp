import {
  Box,
  Button,
  Card,
  Group,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

import { NumberInputField, NumberInputRoot } from "../ui/number-input";

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
import { Field } from "../ui/field";
//import { toaster } from "../ui/toaster";

export const ShoppingCart = (props) => {
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    console.log("muevetePuta");
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
  }, [props.toggle]);

  const handleQuantityChange = (index, newValue) => {
    const updatedList = [...shoppingList];
    updatedList[index].totalAmount = newValue; // Actualiza el valor en la lista
    setShoppingList(updatedList);
  };

  const handlePurchase = async () => {
    try {
      const updatedData = shoppingList.map((item) => ({
        IdClothesSizes: item.idClothesSizes, // Ahora sí lo tenemos disponible
        TotalAmount: item.totalAmount,
      }));

      const response = await fetch("http://localhost:5002/update-reserve", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Error al actualizar los datos");

      alert("Compra realizada y datos actualizados");
    } catch (error) {
      console.error("Error en la compra:", error);
    }
  };

  return (
    <DrawerRoot size={"md"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant={"ghost"} display={{ base: "flex", md: "flex" }}>
          <LuShoppingCart />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent rounded="md">
        <DrawerHeader>
          <DrawerTitle>Carrito Compra</DrawerTitle>
        </DrawerHeader>
        <DrawerBody spaceY={2}>
          {shoppingList.map((item, index) => (
            <Card.Root
              flexDirection="row"
              overflow="hidden"
              maxW="lg"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW="150px"
                src={item.srcImg}
                alt={item.name}
              />
              <Box m={"5px"} minW={{ base: "280px ", md: "300px" }}>
                <Card.Body m={"5px"} minH={"90px"} p={"5px"}>
                  <Card.Title mb={"10px"}>{item.name}</Card.Title>
                  <Group justifyContent={"space-around"}>
                    <Field label="Cantidad" maxW={"70px"} m={"3px"}>
                      <NumberInputRoot
                        defaultValue={item.totalAmount}
                        width="fit-content"
                        onValueChange={(value) =>
                          handleQuantityChange(index, value.valueAsNumber)
                        }
                      >
                        <NumberInputField />
                      </NumberInputRoot>
                    </Field>
                    <Field label="Talla" maxW={"70px"} m={"3px"}>
                      <Text>{item.size}</Text>
                    </Field>
                  </Group>
                </Card.Body>

                <Card.Footer
                  m={"5px"}
                  p={"3px"}
                  // justifyContent={"center"}
                >
                  <IconButton
                    variant={"ghost"}
                    width={"full"}
                    borderRadius={"0"}
                    _hover={{
                      color: "black",
                      bg: "white",
                    }}
                  >
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
          <Button onClick={handlePurchase}>Comprar</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
