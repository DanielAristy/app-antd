import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Sidebar from "./layout/component/Sidebar";
import Products from "./pages/products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
