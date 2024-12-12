import { Routes, Route } from "react-router-dom";
import "devextreme/dist/css/dx.fluent.saas.dark.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
