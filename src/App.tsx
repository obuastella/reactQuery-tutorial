import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
