import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CoursesProvider from "./Contexts/courses.context";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./Components/Styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
