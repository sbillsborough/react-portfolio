// Imports components
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Base App function to bring in the components and routes
function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
