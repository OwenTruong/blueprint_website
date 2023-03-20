import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About/About";
import Nonprofits from "./components/Apply/NonprofitsApply";
import Apply from "./components/Apply/Apply";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Common/Footer";
import StudentApply from "./components/Apply/StudentApply";

function App() {
  // <StudentApply isOpen /> when applications are open
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/nonprofits" element={<Nonprofits />} />
        <Route path="/studentapplication" element={<StudentApply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
