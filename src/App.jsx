import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Page-1/Navbar";
import Page1 from "./components/Page-1/Page1";
import Page2 from "./components/Page-2/Page2";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
