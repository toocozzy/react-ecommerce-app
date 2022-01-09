import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContextProvider from "./context/ContextProvider";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
