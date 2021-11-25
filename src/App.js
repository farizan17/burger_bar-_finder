import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import NavBot from "./components/BotNav/botnav";
import "./App.css";

import HomePage from "./pages/homepage";
import About from "./pages/about";
import Search from "./pages/explore";
import DiskonPage from "./pages/diskonpage";
import Voucher from "./pages/voucher";
import Bar from "./pages/bar";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/explore" element={<Search />} />
          <Route exact path="/bar/:id" element={<Bar />} />
          <Route exact path="/diskon" element={<DiskonPage />} />
          <Route exact path="/voucher/:id" element={<Voucher />} />
        </Routes>
        <NavBot />
      </Router>
    </div>
  );
}

export default App;
