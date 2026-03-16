import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const RentCar = lazy(() => import("./pages/RentCar"));
const RouteDetails = lazy(() => import("./pages/RouteDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const [routesOpen, setRoutesOpen] = useState(false);
  const [mobileRoutesOpen, setMobileRoutesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        routesOpen={routesOpen}
        setRoutesOpen={setRoutesOpen}
        mobileRoutesOpen={mobileRoutesOpen}
        setMobileRoutesOpen={setMobileRoutesOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <ScrollToTop />
      {/* Suspense wrapper */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setRoutesOpen={setRoutesOpen}
                setMobileRoutesOpen={setMobileRoutesOpen}
                setMenuOpen={setMenuOpen}
              />
            }
          />

          <Route path="/rent-car" element={<RentCar />} />

          <Route path="/routes/:slug" element={<RouteDetails />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
