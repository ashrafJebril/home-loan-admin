import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Users from "./pages/users";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/Auth";
import { useNavigate } from "react-router-dom";
// const NavigationHandler = ({ logged }) => {
//   const navigate = useNavigate();

// useEffect(() => {
//   if (!logged) {
//     navigate('/login');
//   }
// }, [logged, navigate]);
function App({ logged }) {
  return (
    <Router>
      {/* <NavigationHandler logged={logged} /> */}
      <div className="App global-font-light bg-[#e2e2e9] min-h-screen p-4 ">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute logged={logged} userType={"Admin"}>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute logged={logged} userType={"Admin"}>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute logged={logged} userType={"Admin"}>
                <Layout>
                  <Users />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

const mapState = (state) => ({
  logged: state.user.logged,
});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(App);
