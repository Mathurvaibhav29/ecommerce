import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home/Homepage";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "../src/pages/nopage/Nopage";
import MyState from "../src/context/data/MyState";
function App() {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </MyState>
  );
}

export default App;
