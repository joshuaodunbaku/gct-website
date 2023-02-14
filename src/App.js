import React from "react";
import Home from "./Routes/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Routes/AboutUs";
import Reviews from "./Routes/Reviews";
import NavBar from "./Routes/Navbar";
import Courses from "./Routes/Courses";
import Category from "./Routes/Category";
import Course from "./Routes/Course";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:categories" element={<Category />} />
          <Route path="courses/:categories/:name" element={<Course />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
