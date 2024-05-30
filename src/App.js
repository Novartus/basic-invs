import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserInventory from "./components/UserInventory";
import AdminInventory from "./components/AdminInventory";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import "antd/dist/reset.css";
import "./App.css";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user-inventory" element={<UserInventory />} />
      <Route path="/admin-inventory" element={<AdminInventory />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
