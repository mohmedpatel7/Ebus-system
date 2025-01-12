import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Genral/Navbar";
import Footer from "./components/Genral/Footer";
import Home from "./components/Genral/Home";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import AdminSignin from "./components/authentication/AdminSignin";
import AddBuses from "./components/buses/addBuses";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/AdminSignin" element={<AdminSignin />} />
          <Route path="/Upload" element={<AddBuses />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
