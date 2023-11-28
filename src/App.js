import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CarPage from "./components/CarPage";
import "./18n";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarPage />} />
        <Route path="/am" element={<CarPage />} />
        <Route path="/en" element={<CarPage />} />
        <Route path="/ru" element={<CarPage />} />
      </Routes>
    </Router>
  );
}
