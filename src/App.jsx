import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore/Explore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
