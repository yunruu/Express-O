import React from "react";
import logo from "../assets/stitch.png";

function User() {
    const username = 'yun ru';

    return (
        <div className="sidebar-top">
            <div className="User">
                <div className="user-logo">
                    <img 
                    src={logo} 
                    alt="icon"
                    />
                </div>
                <div className="user-name">
                    <p>{username}</p>
                </div>
            </div>
            {/* <a className="logout-link" href="#">Logout</a> */}
        </div>
    )
}

export default User;