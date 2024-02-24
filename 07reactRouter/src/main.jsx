import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
    <Route path="github" element={<Github/>}></Route>
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
