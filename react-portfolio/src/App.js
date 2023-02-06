// Imports components
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";

// Base App function to bring in the components and routes
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
