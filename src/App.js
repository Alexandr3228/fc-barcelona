/* eslint-disable no-unused-vars */
import React from "react";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import Players from "./pages/Players";

import Header from "./components/Header";
import Partners from "./components/Partners";
import Social from "./components/Social";
import Footer from "./components/Footer";
import PlayerPage from "./pages/PlayerPage";
import ScrollToTop from "./utils/ScrollToTop";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/player/:id" element={<PlayerPage />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Partners />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
