import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-gray-50 w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
