import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header/Navbar";
import Loader from "./Components/Loader";
import Shop from "./Pages/Shop";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Search = lazy(() => import("./Pages/Search"));
const Shipping = lazy(() => import("./Pages/Shipping"));
const Login = lazy(() => import("./Pages/Login"));
const Oders = lazy(() => import("./Pages/Oders"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          {/*  Not Logged In Route */}
          <Route path="/login" element={<Login />} />

          {/* Logged In User Routes */}

          <Route>
            <Route path="/shop-supernatural" element={<Shop />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/myoders" element={<Oders />} />
          </Route>

          {/*  */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
