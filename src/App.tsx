import { Routes, Route } from "react-router-dom";
import "devextreme/dist/css/dx.fluent.saas.dark.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./layouts/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import DashboardProfile from "./pages/Dashboard/DashboardProfile";
import DashboardCloudStorage from "./pages/Dashboard/DashboardCloudStorage";
import AddCloudStorage from "./pages/Dashboard/AddCloudStorage";
import DashboardVirtualMachines from "./pages/Dashboard/DashboardVirtualMachines";
import DashboardWebHosting from "./pages/Dashboard/DashboardWebHosting";
import DashboardSupport from "./pages/Dashboard/DashboardSupport";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
        <Route path="cloud-storage" element={<DashboardCloudStorage />} />
        <Route path="cloud-storage/create-new" element={<AddCloudStorage />} />
        <Route path="virtual-machines" element={<DashboardVirtualMachines />} />
        <Route path="web-hosting" element={<DashboardWebHosting />} />
        <Route path="support" element={<DashboardSupport />} />
      </Route>
    </Routes>
  );
};

export default App;
