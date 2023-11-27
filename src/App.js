import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CarsPage from "./components/Cars/CarsPage";
import CarPage from "./components/Car/CarPage";
import CarsCustomPage from "./components/CarsCustom/CarsCustomPage";
import CarCustomPage from "./components/CarCustom/CarCustomPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="/:id" element={<CarPage />} />
        <Route path="/cars-custom" element={<CarsCustomPage />} />
         <Route path="/custom/:id" element={<CarCustomPage />} />
           <Route
          path="/car-custom"
          element={<Navigate to="/cars-custom" replace />}
        />
      </Routes>
    </Router>
  );
}
