import { BrowserRouter, Routes, Route } from "react-router-dom";
import Suwon from "./Suwon";
import Seongnam from "./Seongnam";
import Seoul from "./Seoul";
import Gwangju from "./Gwangju";
import Jeju from "./Jeju";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/suwon" element={<Suwon />} />
        <Route path="/seongnam" element={<Seongnam />} />
        <Route path="/seoul" element={<Seoul />} />
        <Route path="/gwangju" element={<Gwangju />} />
        <Route path="/jeju" element={<Jeju />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
