import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/ AboutUs";
import Login from "./pages/Login";
import AdminServices from "./pages/AdminServices";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthProvider>
      <UserProvider user={user} setUser={setUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/quem-somos" element={<AboutUs />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin-services" element={<AdminServices />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}
