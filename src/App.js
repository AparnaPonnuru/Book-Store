import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllCourses from "./pages/AllCourses";
import Bookmarked from "./pages/Bookmarked";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
