import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const eventScroll = window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", eventScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="" alt="Netflix Logo" />

            <img className="nav__avatar" src="" alt="Netflix Logo" />
        </div>
    );
}

export default Nav;
