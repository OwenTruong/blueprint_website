import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Nonprofits from "./components/Nonprofits";
import Apply from "./components/Apply";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home/Home";
import StudentApply from "./components/StudentApply";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
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
    </div>
  );
}

export default App;
