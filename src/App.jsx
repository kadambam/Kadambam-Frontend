import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Page-1/Navbar";
import Page1 from "./components/Page-1/Page1";
import Page2 from "./components/Page-2/Page2";
import Page3 from "./components/Page-3/Page3";
import Page4 from "./components/Page-4/Page4";
import Page5 from "./components/Page-5/Page5";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/page4" element={<Page4/>} />
        <Route path="/page5" element={<Page5/>} />
        
      </Routes>
    </>
  );
}

export default App;
