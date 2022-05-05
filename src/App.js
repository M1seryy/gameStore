import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";
import { Header } from "./components/Header.jsx";
import { BurgerMenu } from "./components/BurgerMenu.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BurgerMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
