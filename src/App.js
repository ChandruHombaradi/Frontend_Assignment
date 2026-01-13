import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
