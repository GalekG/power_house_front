import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./paginas/Login";
import Presentacion from "./paginas/Presentacion";
import Inventory from "./paginas/Inventory";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
