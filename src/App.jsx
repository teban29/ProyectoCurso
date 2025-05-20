import { useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Card } from "./components/Card.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Card />
      </main>
    </div>
  );
}
export default App;
