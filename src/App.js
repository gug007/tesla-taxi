import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CarPage from "./components/CarPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarPage />} />
      </Routes>
    </Router>
  );
}
