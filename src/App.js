import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SightingDetails from "./pages/SightingDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sightings/:report_number"
            element={<SightingDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
