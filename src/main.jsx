import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./views/App.jsx";
import { Route, Routes, BrowserRouter } from "react-router";
import Vegetables from "./views/Vegetables.jsx";
import Contact from "./views/Contact.jsx"

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>
);
