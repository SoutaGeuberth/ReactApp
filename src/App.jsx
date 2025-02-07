import { Provider } from "./components/ui/provider";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import { BodyLayout } from "./components/BodyLayout";
import { ClothCard } from "./components/ClothCard";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [filtro, setFiltro] = useState("");
  const [listaprendas, setListaPrendas] = useState([]);
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
        setListaPrendas(data);
        console.log(data);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Provider>
      <Navbar setFiltro={setFiltro} />
      <Banner />
      <Toaster />
      <BodyLayout />

      {listaprendas
        .filter((prenda) => filtro === "" || prenda.category == filtro)
        .map((prenda, index) => (
          <ClothCard
            idClothesSizes={prenda.idClothesSizes}
            key={index}
            name={prenda.name}
            cost={prenda.cost}
            srcImg={prenda.srcImg}
            description={prenda.description}
            sizes={prenda.size}
            amounts={prenda.amount}
            setListaPrendas={setListaPrendas}
          />
        ))}

      <Footer />
    </Provider>
  );
}

export default App;
