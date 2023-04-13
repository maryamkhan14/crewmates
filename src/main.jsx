import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CreateCrew from "./components/CreateCrew";
import CrewDetails from "./components/CrewDetails";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/create-crew" element={<CreateCrew />} />
        <Route path="/crew" element={<CrewDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
