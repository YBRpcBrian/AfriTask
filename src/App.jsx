import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./pages/SignUp";
import Home from "./pages/LandingPage/Home";
import FreeNavbar from "./Dashboard/Freelancer/FreeNavbar";
import FindTask from "./Dashboard/Freelancer/pages/FindTask";
import DeliverTask from "./Dashboard/Freelancer/pages/DeliverTask";
import Wallet from "./Dashboard/Freelancer/pages/Wallet";
import ClientNavbar from "./Dashboard/JobOwner/clientNavbar";
import PostTask from "./Dashboard/JobOwner/pages/PostTask";
import MakePayments from "./Dashboard/JobOwner/pages/MakePayments";
import Login from "./pages/Login";
import PaymentSuccesPage from "./pages/PaymentSuccesPage";
import Footer from "./components/Footer";
import SingleTaskPage from "./Dashboard/Freelancer/pages/SingleTaskPage";
import TakenTask from "./Dashboard/Freelancer/pages/TakenTask";

function App() {
  const user = useSelector((state) => state.auth?.user); // Get authenticated user
  const isJobOwner = user?.userType === "job-owner";
  const isFreelancer = user?.userType === "freelancer";

  return (
    <Router>
      {/* Conditionally render Navbar based on user type */}
      {user && (
        <>
          {isJobOwner && <ClientNavbar />}
          {isFreelancer && <FreeNavbar />}
        </>
      )}

      <Routes>
        {/* Public Routes (no extra margin) */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<PaymentSuccesPage />} />
        <Route path="/singletask" element={<SingleTaskPage />} />
        <Route path="/takentask" element={<TakenTask />} />
        
      
        {/* Protected Routes (with top margin only if user is logged in) */}
        {user && (
          <>
            {/* Freelancer Routes */}
            {isFreelancer && (
              <>
                <Route path="/freelance/findtask" element={<div className=""><FindTask /></div>} />
                <Route path="/freelance/delivertask" element={<div className=""><DeliverTask /></div>} />
                <Route path="/freelance/wallet" element={<div className=""><Wallet /></div>} />
              </>
            )}

            {/* Job Owner Routes */}
            {isJobOwner && (
              <>
                <Route path="/jobowner/posttask" element={<div className="mt-16"><PostTask /></div>} />
                <Route path="/jobowner/makepayments" element={<div className="mt-16"><MakePayments /></div>} />
                <Route path="/jobowner/wallet" element={<div className="mt-16"><Wallet /></div>} />
              </>
            )}
          </>
        )}

        {/* Redirect any protected route if not logged in */}
        {!user && (
          <>
            <Route path="/freelance/*" element={<Navigate to="/" />} />
            <Route path="/jobowner/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
