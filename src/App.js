import React from "react";
import Foodie from "./component/Foodie"
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Foodie/>
    </Router>
    </>
  );
}

export default App;
