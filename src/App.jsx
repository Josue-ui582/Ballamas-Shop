import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen/Index";
import NavBar from "./Pages/Home/NavBar";

const App = () => {
  return(
    <div className="app">
      <NavBar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={
              <div className="erro-page">
                <p>404, Oups Page Not Found</p>
                <div>
                  <Link to="/">Go Back</Link>
                </div>
            </div>
            }></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App