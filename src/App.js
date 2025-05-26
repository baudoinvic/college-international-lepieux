
import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shortcouses from "./pages/Short/Shortcouses";
import Description from "./pages/Description/Description";
import Gallery from "./pages/Gallery/Gallery";
import Gestion from "./pages/Gestion/Gestion";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";

const Layout = ({ children }) => (
  <>
    <NavbarComponent />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shortcourses" element={<Shortcouses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/description" element={<Description />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gestion" element={<Gestion />} />
      </Routes>
    </Layout>
  );
}

export default App;
