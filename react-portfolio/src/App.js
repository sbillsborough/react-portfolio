// Imports components
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

// Base App function to bring in the components and routes
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
