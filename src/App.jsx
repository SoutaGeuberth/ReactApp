import { Provider } from "./components/ui/provider";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import { BodyLayout } from "./components/BodyLayout";
import { ClothCard } from "./components/ClothCard";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [filtro, setFiltro] = useState("");
  const [listaprendas, setListaprendas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/listaprendas")
      .then((response) => {
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json(); // Convertir la respuesta en JSON
      })
      .then((data) => {
        setListaprendas(data);
        console.log(data);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => console.log("Cambie Filtro"), [filtro]);
  return (
    <Provider>
      <Navbar setFiltro={setFiltro} />
      <Banner />
      <BodyLayout />
      {listaprendas
        .filter((prenda) => prenda.category == filtro)
        .map((prenda, index) => (
          <ClothCard
            key={index}
            name={prenda.name}
            cost={prenda.cost}
            srcImg={prenda.srcImg}
          />
        ))}

      <Footer />
    </Provider>
  );
}

export default App;
