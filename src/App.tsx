import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Header/Navbar";
import Drop from "./Components/Header/Drop";

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
          <Route path="/drop" element={<Drop />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
