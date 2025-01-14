import { Provider } from "./components/ui/provider";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import { BodyLayout } from "./components/BodyLayout";
import { ClothCard } from "./components/ClothCard";

function App() {
  return (
    <Provider>
      <Navbar />
      <Banner />
      <BodyLayout />
      <ClothCard />
    </Provider>
  );
}

export default App;
