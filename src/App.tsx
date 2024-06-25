import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Loader from "./Components/Loader";
import Something from "./Pages/Something";
import Footer from "./Components/Footer";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Search = lazy(() => import("./Pages/Search"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Something />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
