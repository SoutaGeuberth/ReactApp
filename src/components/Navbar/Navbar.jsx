import { HStack } from "@chakra-ui/react";
import { RightContent } from "./RightContent";
import { LeftContent } from "./LeftContent";

export function Navbar(props) {
  const menuItems = [
    {
      name: "Prenda Superior",
      href: "#",
      subItems: [
        { label: "Camisas", href: "#" },
        { label: "Busos", href: "#" },
        { label: "Abrigo", href: "#" },
        { label: "Gabardina", href: "#" },
        { label: "Sueter", href: "#" },
        { label: "Kimono", href: "#" },
      ],
    },
    {
      name: "Prenda Inferior",
      href: "#",
      subItems: [
        { label: "Pantalon", href: "#" },
        { label: "Jeans", href: "#" },
      ],
    },
  ];

  return (
    <HStack
      w="full"
      alignItems={"center"}
      justifyContent={"space-between"}
      p={3}
      backgroundColor={"black"}
      borderBottomWidth={1}
    >
      {/* Left content */}
      <LeftContent data={menuItems} setFiltro={props.setFiltro} />
      {/* Right content */}
      <RightContent />
      {/*mobile menu*/}
    </HStack>
  );
}
