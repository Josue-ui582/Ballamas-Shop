import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen/Index";
import NavBar from "./Pages/Home/NavBar";
import Producte from "./Pages/Home/Product/Product";

const App = () => {
  return(
    <div className="app">
      <NavBar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/producte" element={<Producte />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App