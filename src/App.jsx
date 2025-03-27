import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import FreeNavbar from "./Dashboard/Freelancer/FreeNavbar";
import FindTask from "./Dashboard/Freelancer/pages/FindTask";
import DeliverTask from "./Dashboard/Freelancer/pages/DeliverTask";
import Wallet from "./Dashboard/Freelancer/pages/Wallet";
import ClientNavbar from "./Dashboard/JobOwner/clientNavbar";
import PostTask from "./Dashboard/JobOwner/pages/PostTask";
import MakePayments from "./Dashboard/JobOwner/pages/MakePayments";
import Login from "./pages/Login";
import PaymentSuccesPage from "./pages/PaymentSuccesPage";

function App() {
  const user = useSelector((state) => state.auth?.user); // Get authenticated user

  // Determine user type for navbar
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
        {/* Public Routes (No margin-top applied) */}
        <Route path="/success" element={<PaymentSuccesPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Protected Routes (Wrapped in div with mt-16) */}
      <div className="mt-16">
        <Routes>
          {/* Protected Routes for Freelancers */}
          <Route path="/freelance/findtask" element={user && isFreelancer ? <FindTask /> : <Navigate to="/" />} />
          <Route path="/freelance/delivertask" element={user && isFreelancer ? <DeliverTask /> : <Navigate to="/" />} />
          <Route path="/freelance/wallet" element={user && isFreelancer ? <Wallet /> : <Navigate to="/" />} />

          {/* Protected Routes for Job Owners */}
          <Route path="/jobowner/posttask" element={user && isJobOwner ? <PostTask /> : <Navigate to="/" />} />
          <Route path="/jobowner/makepayments" element={user && isJobOwner ? <MakePayments /> : <Navigate to="/" />} />
          <Route path="/jobowner/wallet" element={user && isJobOwner ? <Wallet /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
