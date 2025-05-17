import { Routes, Route } from "react-router-dom";
import "./App.css";

import Page1 from "./components/Page-1/Page1";
import Page2 from "./components/Page-2/Page2";
import Page3 from "./components/Page-3/Page3";
import Page4 from "./components/Page-4/Page4";
import Page5 from "./components/Page-5/Page5";
import Page6 from "./components/Page-6/Page6";
import AboutUs from "./components/extrapages/AboutUs";
import PrivacyPolicy from "./components/extrapages/PrivacyPolicy";
import FAQSection from "./components/extrapages/FaqPage";
import ReturnsPolicy from "./components/extrapages/OnlineShop";
import HowItWorks from "./components/extrapages/HowItWorks";
import Careers from "./components/extrapages/Careers";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/architect" element={<Page2 />} />
        <Route path="/onlineshop" element={<Page4 />} />
        <Route path="/pmc" element={<Page3/>} />
        <Route path="/maintenance" element={<Page5/>} />
        <Route path="/contact" element={<Page6/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<FAQSection/>} />
        <Route path="/returns-policy" element={<ReturnsPolicy/>} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
        <Route path="/careers" element={<Careers/>} />

      </Routes>
    </>
  );
}

export default App;
