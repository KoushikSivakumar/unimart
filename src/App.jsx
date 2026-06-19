import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import Marketplace from './pages/Marketplace.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import ShopPage from './pages/ShopPage.jsx';
import CreateShop from './pages/CreateShop.jsx';
import SellerDashboard from './pages/SellerDashboard.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop/:shopId" element={<ShopPage />} />
          <Route path="/create-shop" element={<CreateShop />} />
          <Route path="/dashboard" element={<SellerDashboard />} />
        </Routes>
      </main>
    </div>
  );
}
