import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;