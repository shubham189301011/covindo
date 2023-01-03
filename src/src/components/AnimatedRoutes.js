import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Legacy from "../Pages/Legacy";
import ErrorPage from "../Pages/ErrorPage";
import AdminDashboard from "../Pages/AdminDashboard";
import Profile from "../Pages/Profile";

import {AnimatePresence} from 'framer-motion'


export default function AnimatedRoutes() {
    const location = useLocation()
  return (
    <div>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </AnimatePresence>
    </div>
  )
}
