import { Provider } from "./components/ui/provider";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import { BodyLayout } from "./components/BodyLayout";
import { ClothCard } from "./components/ClothCard";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [filtro, setFiltro] = useState("");
  const listaprendas = [
    {
      tittle: "camiseta",
      cost: "450",
      src: "https://http2.mlstatic.com/D_NQ_NP_805158-MLM75310632986_032024-O.webp",
      categoria: "camiseta",
    },
  ];
  return (
    <Provider>
      <Navbar setFiltro={setFiltro} />
      <Banner />
      <BodyLayout />
      {listaprendas
        .filter((prenda) => prenda.categoria == filtro)
        .map((prenda, index) => (
          <ClothCard
            key={index}
            tittle={prenda.tittle}
            cost={prenda.cost}
            src={prenda.src}
          />
        ))}

      <Footer />
    </Provider>
  );
}

export default App;
