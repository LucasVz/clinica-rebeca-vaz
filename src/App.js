import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/ AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quem-somos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
