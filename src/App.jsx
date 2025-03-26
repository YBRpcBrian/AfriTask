import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SighnUp";
import Home from "./pages/Home";
import FreeNavbar from "./Dashboard/Freelancer/FreeNavbar";
import FindTask from "./Dashboard/Freelancer/pages/FindTask";
import DeliverTask from "./Dashboard/Freelancer/pages/DeliverTask";
import Wallet from "./Dashboard/Freelancer/pages/Wallet"
import ClientNavbar from "./Dashboard/JobOwner/clientNavbar"
import PostTask from "./Dashboard/JobOwner/pages/PostTask";
import MakePayments from "./Dashboard/JobOwner/pages/MakePayments";


function App() {
  return (
    <Router>
      {/* Navbar stays visible across all pages */}
      <FreeNavbar />

      <div className=""> {/* Add margin-top to avoid overlap with navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelance/findtask" element={<FindTask />} />
          <Route path="/freelance/delivertask" element={<DeliverTask />} />
          <Route path="/freelance/wallet" element={<Wallet />} />

          <Route path="/jobowner/posttask" element={<PostTask />} />
          <Route path="/jobowner/makepayments" element={<MakePayments />} />
          <Route path="/jobowner/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
