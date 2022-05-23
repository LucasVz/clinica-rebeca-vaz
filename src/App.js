import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/ AboutUs";
import Login from "./pages/Login";
import AdminServices from "./pages/AdminServices";
import { ServiceProvider } from "./context/serviceContext";
import { AuthProvider } from "./context/authContext";
import PageService from "./pages/PageService";

export default function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/quem-somos" element={<AboutUs />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin-services" element={<AdminServices />} />
            <Route path="/servicos" element={<PageService />} />
          </Routes>
        </BrowserRouter>
      </ServiceProvider>
    </AuthProvider>
  );
}
