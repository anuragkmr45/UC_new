import React, { useState } from "react";

import { Outlet, Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
            <nav
                className={
                    navColour
                        ? "navbar navbar-expand-lg fixed-top sticky"
                        : "navbar navbar-expand-lg fixed-top head"
                }
            >
                <div className="container-fluid row">
                    <div className="col-lg-5">
                        <Link className="navbar-brand" to="/" onClick={smoothDirect}>
                            UncoverCampus
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse col-lg-7"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav text mx-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                    onClick={smoothDirect}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    style={{ backgroundColor: "#252525a0" }}
                                >
                                    <li>
                                        <NavLink
                                            className="dropdown-item text-white"
                                            to="/collegefinder"
                                            onClick={smoothDirect}
                                        >
                                            College Finder
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item text-white"
                                            to="/campusexplorer"
                                            onClick={smoothDirect}
                                        >
                                            Campus Explorer
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item text-white"
                                            to="/events"
                                            onClick={smoothDirect}
                                        >
                                            Event
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item text-white"
                                            to="/accommodation"
                                            onClick={smoothDirect}
                                        >
                                            Accommodation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item text-white"
                                            to="/academics"
                                            onClick={smoothDirect}
                                        >
                                            Academics
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/about"
                                    onClick={smoothDirect}
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
