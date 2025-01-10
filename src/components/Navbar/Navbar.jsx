import { HStack } from "@chakra-ui/react";
import { RightContent } from "./RightContent";
import { LeftContent } from "./LeftContent";

export function Navbar() {
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
      <LeftContent />
      {/* Right content */}
      <RightContent />
      {/*mobile menu*/}
    </HStack>
  );
}
