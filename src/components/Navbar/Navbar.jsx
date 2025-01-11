import { HStack } from "@chakra-ui/react";
import { RightContent } from "./RightContent";
import { LeftContent } from "./LeftContent";

export function Navbar() {
  const menuItems = [
    {
      name: "Prenda Superior",
      href: "#",
      subItems: [
        { label: "Camisa", href: "#" },
        { label: "Camiseta", href: "#" },
        { label: "Abrigo", href: "#" },
        { label: "Jersey", href: "#" },
        { label: "JP", href: "#" },
      ],
    },
    {
      name: "Prenda Inferior",
      href: "#",
      subItems: [
        { label: "Pantalon", href: "#" },
        { label: "Jeans", href: "#" },
        { label: "Sudaderas", href: "#" },
        { label: "Shorts", href: "#" },
      ],
    },
  ];

  return (
    <HStack
      w="full"
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      backgroundColor={"black"}
      borderBottomWidth={1}
    >
      {/* Left content */}
      <LeftContent data={menuItems} />
      {/* Right content */}
      <RightContent />
      {/*mobile menu*/}
    </HStack>
  );
}
