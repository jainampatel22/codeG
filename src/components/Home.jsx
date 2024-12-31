import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";

export default function Home() {
    const navigate = useNavigate();

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const jwt = urlParams.get("jwt");

        if (jwt) {
            // Save the token to localStorage
            localStorage.setItem("token", jwt);
            console.log("Token saved:", jwt);

            // Redirect to the dashboard
            navigate("/dashboard");
        } else {
            console.log("No token found in URL.");
        }

    },[navigate])
        // Extract the token from the URL query string
        

    return (
        <div>
            <h1>Welcome to the AI Code Generator</h1>
            <LoginButton />
        </div>
    );
}
