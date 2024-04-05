
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./services/store";

function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <AppMain />
      <Footer />
    </Provider>
  );
}

export default App;
