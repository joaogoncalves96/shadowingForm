import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import List from "../components/List/List";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteLoggedin from "./PrivateRouteLoggedin";
import Logout from "../components/Logout/Logout";

function Rotas() {

  return (
    <Router>
      <Routes>
        <Route path="/logout" element={<Logout />} />
        <Route 
        path="/"
       element={
        <PrivateRouteLoggedin>
       <Login  /> 
       </PrivateRouteLoggedin>
       } />
        <Route 
        path="/register" 
        element={
        <PrivateRouteLoggedin>
        <Register />
        </PrivateRouteLoggedin>
        } />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <List />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
