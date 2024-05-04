import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/authLayout.css";

export default function AuthLayout() {
    const [image, setImage] = useState("");
    const location = useLocation();

    useEffect(() => {
    setImage(location.pathname.split("/")[3]);
    }, [location]);

    return (
        <div className="signUpForm">
            <div className="formHalf container">
                <Outlet />
            </div>
            <div className="logoHalf">
                <div className="logoGraphic">
                    <img src={`/images/${image}.png`}/>
                </div>
            </div>
        </div>
    )
}