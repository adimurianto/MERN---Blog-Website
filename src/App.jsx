import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
