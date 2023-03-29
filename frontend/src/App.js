import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import products from "./data/products.js";
import Nav from "./components/Nav.js";
import HomePage from "./pages/HomePage.js";
import CourseLogPage from "./pages/CourseLogPage.js";
import CourseCreatePage from "./pages/CourseCreatePage.js";
import CourseEditPage from "./pages/CourseEditPage.js";
import ConceptsPage from "./pages/ConceptsPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import OrderPage from "./pages/OrderPage.js";
import StaffPage from "./pages/StaffPage.js";

//stylesheet and images
import logo from "./logo.svg";
import { GiPalmTree } from "react-icons/gi";
import { GiHeraldicSun } from "react-icons/gi";
import "./App.css";


function App() {

  const [course, setCourse] = useState([])

  return (
    
    <>
      <BrowserRouter>

      <header>
        {/* <img src={logo} className="App-logo" alt="logo"/> */}

        <h1>
          <i alt="heraldic sun icon"><GiHeraldicSun/> </i>
          Paola Cernada
          <i alt="palm tree icon"> <GiPalmTree/></i>
        </h1>
      </header>

    {/* Global navigation component */}
      <Nav/>

      <main>
        <section>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courseRegistry" element={<CourseLogPage setCourse={setCourse} />} />
            <Route path="/add-course" element={<CourseCreatePage />} />
            <Route path="/edit-course" element={<CourseEditPage course={course} />} />
            <Route path="/concepts" element={<ConceptsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage products={products}/>} />
            <Route path="/staff" element={<StaffPage />} />

            
          </Routes>

        </section>
      </main>

      <footer>
        <p>&copy; 2023 Paola Cernada</p>
      </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
