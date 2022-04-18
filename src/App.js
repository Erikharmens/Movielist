import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

// Tutorial - https://www.youtube.com/watch?v=1eO_hNYzaSc //

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
