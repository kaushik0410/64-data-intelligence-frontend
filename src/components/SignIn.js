import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("handleSubmit")
        // console.log("email ", email)
        // console.log("password ", password)
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            });
            // console.log(res.data);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (err) {
            // console.error("Login error: ", err.res?.data || err.message);
            alert(err.res?.data?.message || "Login failed");
        }
    }

    return (
        <div style={{height: "100vh"}}>
            <Navbar />
            <div style={{height: "calc(100vh - 100px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h2 style={{fontWeight: "bold"}}>Sign In to India Database Hub</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" style={{width: "300px", margin: "10px 0", padding: "10px", boxSizing: "border-box"}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required />
                    </div>
                    <div>
                        <input type="password" style={{width: "300px", margin: "10px 0", padding: "10px", boxSizing: "border-box"}} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                    </div>
                    <button type='submit' style={{width: "300px", margin: "10px 0", padding: "10px", boxSizing: "border-box"}}>
                        Sign In
                    </button>
                </form>
                <div style={{display: "flex", justifyContent: "space-between", width: "300px"}}>
                    <span style={{fontSize: "12px"}}>Forgot Password?</span>
                    <span style={{fontSize: "12px"}}>Don't have an account? <Link to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn
