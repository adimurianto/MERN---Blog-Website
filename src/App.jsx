import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";
import NotFound from "./components/screens/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/single" element={<Single/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
