
import { Route, Routes } from "react-router-dom";
import BestSellers from "../components/layout/BestSellers/BestSellers";
import ProductList from "../features/product/component/ProductList/ProductList";
import CartPage from "../pages/Cart/CartPage";
import Home from "../pages/Home/Homepage";
import NewArrivals from "../pages/NewArrivals/NewArrivals";
import Offers from "../pages/Offers/Offers";
import SignupPage from "../pages/Register/SignupPage";
import Shop from "../pages/Shop/Shop";
import WishlistPage from "../pages/Wishlist/WishlistPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newarrivals" element={<NewArrivals />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/bestsellers" element={<BestSellers />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cartPage" element={<CartPage />} />
      <Route path="/signupPage" element={<SignupPage />} />
      <Route path="/:gender" element={<ProductList />} />
      <Route path="/:gender/:category" element={<ProductList />} />
    </Routes>
  );
};
export default AppRouter;
