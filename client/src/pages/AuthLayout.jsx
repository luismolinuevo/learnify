import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AuthLayout() {
    return (
        <div className="signUpForm">
            <div className="formHalf container">
                <Outlet />
            </div>
            <div className="logoHalf">
                <div className="logoGraphic">
                    <img />
                </div>
            </div>
        </div>
    )
}