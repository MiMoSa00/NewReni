import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Verification from "./components/Verification/Verification"
import Signup from "./components/Signup"
import Login from "./components/Log-in/Login"
import Forgot from "./components/Forgot"
import Reset from "./components/Reset"
import Dashboard from "./components/Dashboard"
// import DashboardLayout from "./components/DashboardLayout"
import Api from "./components/API/Api"
import Webhook from "./components/Webhook"
import ChangePassword from "./components/ChangePassword"

function App() {
  return(
<div>
    <Router>
     <Routes>
      <Route index element={<Verification />} />
      <Route path="/verify" element={<Verification />}/>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/log-in" element={<Login />} />
      <Route path="/log-in/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Reset />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/api" element={<Api />} />
      <Route path="/webhook" element={<Webhook />} />
      <Route path="/changepassword" element={<ChangePassword />} />

      {/* <Route path="dashboard" element={<Dashboard />} /> */}
     </Routes>
    </Router>
  </div>
  )
  
}

  

export default App
