import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./pages/Landing";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import ShopPage from "./pages/ShopPage";
import CreateShop from "./pages/CreateShop";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop/:shopId" element={<ShopPage />} />
        <Route path="/create-shop" element={<CreateShop />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/dashboard/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}