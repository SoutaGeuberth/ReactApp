import { HStack } from "@chakra-ui/react";
import { RightContent } from "./RightContent";
import { LeftContent } from "./LeftContent";
import { useEffect, useState } from "react";

export function Navbar(props) {
  const [listacategorias, setListacategorias] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/listacategorias")
      .then((response) => {
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json(); // Convertir la respuesta en JSON
      })
      .then((data) => {
        setListacategorias(data);
        console.log(data);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const menuItems = [
    {
      name: "Prenda Superior",
      href: "#",
      subItems: listacategorias
        .filter((category) => category.category_type == "S")
        .map((element) => ({ label: element.category, href: "#" })),
    },
    {
      name: "Prenda Inferior",
      href: "#",
      subItems: listacategorias
        .filter((category) => category.category_type == "I")
        .map((element) => ({ label: element.category, href: "#" })),
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
