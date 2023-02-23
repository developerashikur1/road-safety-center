import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/news' element={<News />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
