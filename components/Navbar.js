import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/idh_logo.png'
import {Search, ChevronDown, UserCircle} from 'lucide-react'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setIsLoggedIn(true);
    }, []);

    return (
        <nav style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "100px", backgroundColor: "#ccc"}}>
            <div>
                <img src={Logo} alt='India Database Hub' style={{height: "60px", padding: "10px"}} />
            </div>
            <div style={{height: "60px", width: "40vw", display: "flex", alignItems: "center", background: "white", border: "1px solid #ccc", borderRadius: "10px", padding: "0 15px"}}>
                <Search style={{height: "24px", width: "24px", marginRight: "10px"}} />
                <input type='text' placeholder='Search for data and analytics' style={{height: "90%", width: "100%", border: "none", outline: "none", fontSize: "16px"}} />
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "20px", padding: "0 10px"}}>
                <Link style={{textDecoration: "none", color: "#000"}}>Database <ChevronDown /></Link>
                <Link style={{textDecoration: "none", color: "#000"}}>Calendar</Link>
                <Link style={{textDecoration: "none", color: "#000"}}>Help</Link>
                {!isLoggedIn ? (
                    <Link href="/" style={{textDecoration: "none", color: "#000"}}>Login</Link>
                ) : (
                    <Link href="/"><UserCircle /></Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar
