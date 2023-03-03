import React from "react";
import { Outlet,  Navigate } from "react-router-dom";
import Publiclayout from "../Layouts/Publiclayout";




const PublicGuard = () => {
    
    const token = localStorage.getItem("token");
    return token !== null ? (
        <Navigate to="/dashboard" />
    ) : (
        <Publiclayout>
            <Outlet />
        </Publiclayout>
    );
};

export default PublicGuard;
