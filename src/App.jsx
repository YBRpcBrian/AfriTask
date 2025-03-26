import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SighnUp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FreeNavbar from "./Dashboard/Freelancer/FreeNavbar";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FreeNavbar />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
