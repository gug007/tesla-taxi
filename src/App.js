import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import "./18n";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/am" element={<Main />} />
        <Route path="/en" element={<Main />} />
        <Route path="/ru" element={<Main />} />
      </Routes>
    </Router>
  );
}
