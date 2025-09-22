import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-gray-50 w-full flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
