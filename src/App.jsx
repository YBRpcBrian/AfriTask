import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SighnUp";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
