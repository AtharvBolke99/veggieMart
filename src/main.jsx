import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
