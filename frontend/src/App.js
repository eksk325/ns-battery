import { useState, useEffect } from "react";
import Header from "./js/Header";
import Footer from "./js/Footer";
import Home from "./routes/Home";
import Products from "./routes/Products";
import ContactUs from "./routes/ContactUs";
import Quote from "./routes/Quote";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/admin-login" element={<Login />}></Route>
        <Route path="/raehan-login" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
