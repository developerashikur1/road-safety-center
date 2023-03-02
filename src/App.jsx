import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/news' element={<News />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/services' element={<Services />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
