import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicGuard from "../Guards/PublicGuard";
import PrivateGuard from "../Guards/PrivateGuard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgetpassword from "../Pages/Forgot";
import Reset from "../Pages/Reset";
import User from "../Pages/User";
import Dashboard from "../Pages/Dashboard";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route element={<PublicGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget" element={<Forgetpassword />} />
                <Route path="/reset" element={<Reset />} />
            </Route>
            <Route element={<PrivateGuard />}>
                <Route path="users" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default Routing;
