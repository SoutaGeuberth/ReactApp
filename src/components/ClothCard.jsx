import { Button, Card, Image, Text } from "@chakra-ui/react";

export function ClothCard(props) {
  return (
    <Card.Root maxW={"300px"} overflow="hidden" m={"20px"}>
      <Image src={props.src} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title>{props.tittle}</Card.Title>
        <Card.Description>color palette here</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {props.cost}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
}
