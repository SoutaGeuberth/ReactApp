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

export function ClothCard(props) {
  const sizes = createListCollection({
    items: props.sizes
      .map((size, index) => ({
        label: size,
        value: size,
        amount: props.amounts[index],
      }))
      .filter((item) => item.amount > 0), // Filtra solo los que tengan amount > 0
  });

  return (
    <Card.Root maxW={"300px"} overflow="hidden" m={"20px"}>
      <Image src={props.srcImg} />
      <Card.Body gap="2">
        <Card.Title>{props.name}</Card.Title>
        <Card.Description>
          <Text>{props.description}</Text>
        </Card.Description>
        <Group justify={"space-between"}>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {props.cost}
          </Text>
          <SelectRoot collection={sizes} size="sm" width="120px">
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
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
}
