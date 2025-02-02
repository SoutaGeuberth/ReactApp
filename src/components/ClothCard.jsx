import {
  Button,
  Card,
  createListCollection,
  Group,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
import { useState } from "react";

export function ClothCard(props) {
  const sizes = createListCollection({
    items: props.sizes
      .map((size, index) => ({
        label: size,
        value: props.idClothesSizes[index],
        amount: props.amounts[index],
      }))
      .filter((item) => item.amount > 0), // Filtra solo los que tengan amount > 0
  });

  const [actualSize, setActualSize] = useState(null); // Este es el ID de la tabla ClothesSizes

  return (
    <Card.Root maxW={"300px"} overflow="hidden" m={"20px"}>
      <Image src={props.srcImg} />
      <Card.Body gap="2">
        <Card.Title>{props.name}</Card.Title>
        <Card.Description>{props.description}</Card.Description>
        <Group justify={"space-between"}>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {props.cost}
          </Text>
          <SelectRoot
            collection={sizes}
            size="sm"
            width="120px"
            onValueChange={(e) => setActualSize(e.value[0])}
          >
            <SelectLabel>Talla</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder={"talla"} />
            </SelectTrigger>
            <SelectContent>
              {sizes.items.map((size) => (
                <SelectItem item={size} key={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Group>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          variant="solid"
          onClick={() => {
            fetch("http://localhost:5002/buy", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idClothesSizes: actualSize,
              }),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Error al comprar");
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }}
        >
          Buy now
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            fetch("http://localhost:5002/reserve", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idClothesSizes: actualSize,
              }),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Error al comprar");
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }}
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
