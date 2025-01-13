import { Provider } from "./components/ui/provider";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <Provider>
      <Navbar />
      <Banner />
    </Provider>
  );
}

export default App;
