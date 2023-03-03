import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Privatelayout from "../Layouts/Privatelayout";




const PrivateGuard = () => {
    const token = localStorage.getItem("token");
    return token == null ? (
        <Navigate to="/login" />
    ) : (
        <Privatelayout>
            <Outlet />
        </Privatelayout>
    );
};

export default PrivateGuard;
