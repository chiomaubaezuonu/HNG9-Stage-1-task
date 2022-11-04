import Profile from "./Components/Profile.js";
import Contact from "./Components/Contact.js";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
